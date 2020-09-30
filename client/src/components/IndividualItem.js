import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "../actions";
import { COLORS } from "./styles/Colors";
import Loader from "react-loader-spinner";
import FourOhFour from "./errrorPage/fourOhFour";

const IndividualItem = () => {
  const dispatch = useDispatch();
  let { itemId } = useParams();

  const [item, setItemData] = React.useState("");
  const [companies, setCompaniesData] = React.useState();
  const [loadStatus, setLoadStatus] = React.useState("loading");
  const [loadCompanyStatus, setLoadCompanyStatus] = React.useState("loading");

  React.useEffect(() => {
    fetch(`/items/${itemId}`, {
      method: "GET",
      header: {
        Application: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw 404;
        }
        return res.json();
      })
      .then((data) => {
        setItemData(data.item);
        setLoadStatus("loaded");
      })
      .catch((err) => setLoadStatus("Error"));
  }, [itemId, dispatch]);

  React.useEffect(() => {
    fetch("/companies", {
      method: "GET",
      header: {
        Application: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCompaniesData(data);
        setLoadCompanyStatus("loaded");
      })
      .catch((err) => setLoadCompanyStatus("Error"));
  }, [itemId, dispatch]);

  if (loadStatus === "loaded" && loadCompanyStatus === "loaded") {
    {
      let company = companies.sorted_companies.find((company) => {
        return company._id === item.companyId;
      });

      return (
        <Wrapper>
          <Img src={item.imageSrc} />
          <Product>
            <Name>{item.name}</Name>
            <Price>{item.price}</Price>
            <Description>
              <div>
                Category: {item.category}
                <div>Location: {item.body_location}</div>
              </div>
              <div>
                Company:
                <a href={company.url} target="_blank">
                  {company.name}
                </a>
              </div>
            </Description>
          </Product>
          <StockCount>
            {item.numInStock > 0
              ? `Only ${item.numInStock} Left in Stock!!`
              : "Out of Stock!"}
          </StockCount>
          <Button
            onClick={(ev) => {
              ev.stopPropagation();
              dispatch(addItem(item));
            }}
            disabled={item.numInStock === 0}
          >
            Add To Cart
          </Button>
        </Wrapper>
      );
    }
  } else if (loadStatus === "Error") {
    return <FourOhFour />;
  } else {
    return (
      <Wrapper>
        <Loader
          type="Grid"
          color={COLORS.BLUE.PRIMARY}
          m
          height={80}
          width={80}
        />
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
`;

const Img = styled.img`
  height: 335px;
  width: 350px;
  max-height: 80%;
  max-width: 90%;
  border-radius: 15px;
  @media (min-width: 800px) {
    height: 275px;
    width: auto;
  }
`;

const Name = styled.p`
  font-weight: bold;
  text-align: center;
`;

const Price = styled.div`
  text-align: center;
  padding: 10px;
  font-weight: bold;
  font-size: 20px;
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 15px;
  font-size: 13px;
`;

const StockCount = styled.div`
  color: ${COLORS.BLUE.PRIMARY};
  font-style: italic;
  padding-bottom: 10px;
  font-weight: bold;
`;

const Button = styled.button`
  border: 1px solid ${COLORS.BLUE.PRIMARY};
  background-color: ${COLORS.PURPLE.SECONDARY};
  color: #fff;
  font-size: 15px;
  padding: 3px 10px;
  font-size: bold;
  width: 100%;
  height: 35px;
  &:disabled {
    background-color: grey;
  }
  @media (min-width: 800px) {
    width: 350px;
  }
`;

export default IndividualItem;

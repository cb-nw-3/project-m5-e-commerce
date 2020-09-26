import React from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";

import { selectSort} from '../action';
import { selectBodyPart} from '../action';

const DropdownMenu = (props) => {
  const dispatch = useDispatch();

  //constants for content of the menu
  const title = props.title ;
  const menuOptions = props.menuOptions;

  const dropdownRef = React.useRef(null);
  //Some bit of state that keeps track if the menu is open or closed
  const [isActive, setIsActive] = React.useState(false);

  //Function that toggles menu active with inactive
  const onClick = () => {
    setIsActive(!isActive);
  }

  React.useEffect(() => {
    const pageClickEvent = (ev) => {
      if (dropdownRef.current !== null && !dropdownRef.current.contains(ev.target)) {
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      window.addEventListener('click', pageClickEvent);
    }

    return () => {
      window.removeEventListener('click', pageClickEvent);
    }
  }, [isActive]);

  return(
    <MenuContainer className="menu-container">
      <MenuButton onClick={onClick} className="menu-trigger">{title}</MenuButton>

      <Menu ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
        <MenuList>
          {
            menuOptions.map((option) => {
              return(
              <MenuOption>
                <MenuOptionButton onClick={
                (title === "Shop By Body Part")
                ? (() => dispatch(selectBodyPart(option)))
                : (() => dispatch(selectSort(option)))
                }>
                  {option}
                </MenuOptionButton>
              </MenuOption>
            )})
          }
        </MenuList>
      </Menu>
    </MenuContainer>
  )
}

const MenuContainer = styled.div`
  position: relative;
  padding: 0 50px;
`
const MenuButton = styled.button`
  background-color: rgb(150,150,150);
  padding: 25px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  font-size: 1em;
  font-weight: bold;
  color: #fafafa;
  transition: background-color 1s;

  &:hover, &:focus {
    background-color: rgba(150,150,150,0.7);
    transform: scale(1.01);
    outline: none;
  }
`
const Menu = styled.nav`
  background: black;
  color: white;
  border-radius: 8px;
  position: absolute;
  top: 68px;
  right: 0;
  left: 0;
  width: 200px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  z-index: 100;
`
const MenuList = styled.ul`
  font-family: "Montserrat", sans-serif;
  list-style: none;
  padding: 0;
  margin: 0;
`
const MenuOptionButton = styled.button`
  background-color: #fafafa;
	color: black;
	border: none;
	font: inherit;
	cursor: pointer;
	outline: inherit;
  width: 100%;
  text-decoration: none;
  padding: 8px 20px;
  display: block;

  &:hover {
    background-color: rgba(150,150,150,1);
    transform: scale(1.1);
    color: #fafafa;
  }
`
const MenuOption = styled.li`
  border-bottom: 1px solid #dddddd;
`

export default DropdownMenu;
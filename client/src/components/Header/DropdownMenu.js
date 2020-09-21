import React from "react";
import styled from "styled-components";

const DropdownMenu = (props) => {
  //constants for content of the menu
  const title = props.title ;
  const menuOptions = props.menuOptions;

  const dropdownRef = React.useRef(null);
  //Some bit of state that keeps track if the menu is open or closed
  const [isActive, setIsActive] = React.useState(false);
  //Function that toggles menu active with inactive
  const onClick = () => setIsActive(!isActive);

  React.useEffect(() => {
    const pageClickEvent = (e) => {
      if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
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
      <button onClick={onClick} className="menu-trigger">{title}</button>

      <Menu ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
        <MenuList>
          {
            menuOptions.map((option) => {
              return(
              <MenuOption><MenuOptionButton href="/trips">{option}</MenuOptionButton></MenuOption>
            )})
          }
        </MenuList>
      </Menu>
    </MenuContainer>
  )
}


//All the styles need massive rework

const MenuContainer = styled.div`
  position: relative;
`

const Menu = styled.nav`
  background: #ffffff;
  border-radius: 8px;
  position: absolute;
  top: 25px;
  right: 0;
  width: 200px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
`

const MenuList = styled.ul`
    list-style: none;
  padding: 0;
  margin: 0;
`

const MenuOptionButton = styled.button`
	background: none;
	color: inherit;
	border: none;
	font: inherit;
	cursor: pointer;
	outline: inherit;
  width: 100%;
  text-decoration: none;
  padding: 15px 20px;
  display: block;
`

const MenuOption = styled.li`
  border-bottom: 1px solid #dddddd;
`

export default DropdownMenu;
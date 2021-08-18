import React from 'react'
import { Link } from "gatsby"
import { slide as Menu } from "react-burger-menu";
import styled from "styled-components"

export default props => {
    return (
      <>
        <Menu {...props}>          
            <NavMenu>
                  <NavLink className="menu-item" to='home'>Home</NavLink>
                  <NavLink className="menu-item" to='/about'>About</NavLink>
                  <NavLink className="menu-item" to='/contact'>Contact</NavLink>
            </NavMenu>
        </Menu>
      </>
    );
};

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  padding: 0rem;
  width: 100%;
  text-decoration: none;
  outline: none !important;
  background-color:#08275c !important;
  margin: 0px;
`

const NavLink = styled(Link)`
    background-position:right 15px center;
    background-repeat:no-repeat;
    color:#ffffff;
    display: flex;
    width: 100%;
    align-items: center;
    text-decoration: none;
    background-color:#573393 !important;
    height: 100%;
    cursor: pointer;
    padding:.5rem 15px;
    border-bottom:1px solid #7951BB;
    font-size:14px;
    font-weight:400;
    line-height:30px;
    & :hover{color:#CEC8D8;;}
`
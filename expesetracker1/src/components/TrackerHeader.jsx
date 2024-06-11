
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Collapse, Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarToggler } from "reactstrap";
import styled from "styled-components";



const TrackerHeader = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  const StyledNavItem = styled(NavLink)`
  color: #BF4F74;
  font-weight: bold;
`;

  return (
    <div className="container-fluid">
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="me-auto">
          Expense Tracker
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <StyledNavItem href="/report">Dash Board</StyledNavItem>
            </NavItem>
            <NavItem>
            <StyledNavItem href="/expense">Expenses</StyledNavItem>
            </NavItem>
            <NavItem>
            <StyledNavItem href="/income">Income</StyledNavItem>
            </NavItem>
            <NavItem>
            <StyledNavItem href="/demostate">Demo State</StyledNavItem>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Outlet />
    </div>
  )

}

export default TrackerHeader
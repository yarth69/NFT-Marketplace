import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: #ffffff;
  padding: 0 50px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.a`
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
  color: #333333;
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
`;

export const NavItem = styled.li`
  margin-left: 50px;
`;

export const NavLink = styled.a`
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  color: #333333;
  transition: color 0.3s ease;

  &:hover {
    color: #ff4d4d;
  }
`;

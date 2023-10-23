import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {FC} from "react";

const StyledNavBar = styled.nav`


`

const StyledNavBarList = styled.ul`
  padding-left: 15px;
  list-style: none;
  
`

const StyledNavBarListItem = styled.li`


  & a {
    text-decoration: none;
  }
`

export const Navbar: FC = () => {

    const links = [
        {route: '/profile', name:'Profile'},
        {route: '/messages', name:'Messages'},
        {route: '/news', name:'News'},
        {route: '/music', name:'Music'},
        {route: '/settings', name:'Settings'},
    ]

    return (
        <StyledNavBar>

            <StyledNavBarList>

                {links.map((link, i) => (
                    <StyledNavBarListItem key={i}>
                        <NavLink className={'nav-links'}  to={link.route}>{link.name}</NavLink>
                    </StyledNavBarListItem>
                ))}


            </StyledNavBarList>

        </StyledNavBar>
    )
}
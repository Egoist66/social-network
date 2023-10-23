import styled from "styled-components";
import React, {FC} from 'react'
import {Navbar} from "./Navbar";

const StyledSidebar = styled.aside`

  grid-area: aside;
  background-color: #8952f7;
  border-radius: 7px;
  height: 690px;
  padding: 5px;
  
  li a {
    color: white;
  }

  .active.nav-links {
    font-weight: 600;

  }



`

export const Sidebar: FC = () => {
    return (
        <StyledSidebar>
            <Navbar />
        </StyledSidebar>
    )
}
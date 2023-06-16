import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-component";
import {Button} from "../styles/Button";

const Fotter =()=>{
    return <Wrapper>
        <div className="contact-short">
            <div className="grid grid-two-column">
                <div>
                    <h3> Ready to get started</h3>
                    <h3> Talk to me </h3>
                </div>
                <div>
                    <NavLink to="/">
                        <Button>
                            Get Started
                        </Button>
                    </NavLink>
                </div>
            </div>
        </div>
    </Wrapper>
    
};
const Wrapper=styled.section ``;
export default Fotter;
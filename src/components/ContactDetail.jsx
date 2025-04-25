import React from "react";
import styled from "styled-components";
import User from "../images/image.png";
import { Link, useLocation } from "react-router-dom";

function ContactDetails(props) {
    const location = useLocation();
    const contact = location.state?.contact;

    console.log("ContactDetails:", contact);
    return (
        <Container>
            <div>
                <img src={User} alt="" width={"200px"} />
            </div>
            <Detail>
                <p>{contact.name}</p>
                <p>{contact.email}</p>
            </Detail>

            <Link to="/">
                <Button>Back To Home</Button>
            </Link>
        </Container>
    );
}

const Container = styled.div`
    margin-left: 300px;
    height: 600px;
    width: 300px;
    display: flex;
    justify-content: center;
    /* align-items: centers; */
    flex-direction: column;
`;

const Detail = styled.div`
    flex-wrap: wrap;
    align-items: end;
`;

const Button = styled.button`
    margin-left: 10px;
    font-size: 20px;
    height: 50px;
    width: 100%;
    border: none;
    border-radius: 6px;
    background-color: #3f51b5;
    color: #ffffff;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #303f9f;
    }
`;

export default ContactDetails;

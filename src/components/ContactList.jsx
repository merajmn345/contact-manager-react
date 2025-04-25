import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { Link } from "react-router-dom";

function ContactList({ contacts, removeContact }) {
    return (
        <div>
            <Flex>
                <Title>Contact List</Title>
                <Link to="/add-contact">
                    <Button>Add Contact</Button>
                </Link>
            </Flex>
            {contacts.map((contact) => (
                <Card key={contact.id} contact={contact} removeContact={removeContact} />
            ))}
        </div>
    );
}

const Title = styled.h2`
    font-size: 25px;
    margin-left: 40px;
    margin-top: 30px;
`;

const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
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
export default ContactList;

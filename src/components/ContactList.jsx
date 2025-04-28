import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import { Link } from "react-router-dom";

function ContactList({ contacts, searchTerm, setSearchTerm, removeContact, searchHandler }) {
    // const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResult] = useState([]);

    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        searchHandler(term);
        console.log(term);
    };

    return (
        <div>
            <Flex>
                <Title>Contact List</Title>
                <Link to="/add-contact">
                    <Button>Add Contact</Button>
                </Link>
            </Flex>
            <Input>
                <Search type="text" placeholder="Search contact" value={searchTerm} onChange={handleSearch} />
            </Input>
            {contacts.length > 0 ? (
                contacts.map((contact) => <Card key={contact.id} contact={contact} removeContact={removeContact} />)
            ) : (
                <h1 style={{ textAlign: "center", marginTop: "50px" }}>You have no any contacts</h1>
            )}
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

const Input = styled.div`
    margin: 20px;
`;

const Search = styled.input`
    padding: 10px;
    border: 1px solid #e0e6ed;
    border-radius: 5px;
    font-size: 16px;
    margin-left: 25%;
    width: 50%;
    ::placeholder {
        font-size: 12px;
        color: #aaa; /* Light gray placeholder text */
        font-style: italic; /* Optional: make it slightly different */
        opacity: 1; /* Fully visible */
    }
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

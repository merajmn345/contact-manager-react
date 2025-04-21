import React from "react";
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
import user from "../images/image.png";
import { Link } from "react-router-dom";

function DisplayContact({ contacts, deleteHandler }) {
    return (
        <div>
            <Flex>
                <Title>ContactList</Title>
                <Link to="/add">
                    <AddButton>Add Contact</AddButton>
                </Link>
            </Flex>

            {contacts.map((contact) => (
                <Card key={contact.id}>
                    <Image src={user} alt="i" />
                    <Contact>
                        <Details>{contact.name}</Details>
                        <Details>{contact.email}</Details>
                    </Contact>
                    <Button>
                        <FaTrashAlt onClick={() => deleteHandler(contact.id)} />
                    </Button>
                </Card>
            ))}
        </div>
    );
}

const Flex = styled.div`
    display: flex;
    align-items: center;
`;
const Title = styled.h2`
    font-size: 25px;
    margin-left: 30px;
    margin-top: 30px;
`;

const AddButton = styled.button`
    margin: 30px 30px;
    padding: 10px;
    background: #3b82f6;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #2563eb; /* Slightly darker blue */
    }
`;

const Card = styled.div`
    box-sizing: content-box;
    max-width: 45vw;
    height: 17vh;
    border: 1px solid gray;
    margin: 20px 30px;
    border-radius: 5px;
    box-shadow: 2px 2px 4px 2px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Image = styled.img`
    margin-left: 10px;
    border: none;
    border-radius: 50%;
    height: 40px;
    width: 40px;
`;

const Contact = styled.div`
    /* margin-right: 30px; */
    width: 30%;
`;

const Details = styled.p`
    font-size: 18px;
`;

const Button = styled.button`
    cursor: pointer;
    color: red;
    width: 40px;
    height: 40px;
    border: none;
`;

export default DisplayContact;

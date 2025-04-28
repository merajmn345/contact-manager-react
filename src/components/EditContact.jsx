import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

function EditContact({ updateContactHandler }) {
    const location = useLocation();
    const [name, setName] = useState(location.state?.contact.name || "");
    const [email, setEmail] = useState(location.state?.contact.email || "");

    const { id } = location.state?.contact;
    const navigate = useNavigate();
    function updateContact(e) {
        e.preventDefault();

        // const newContact = { id , name, email };
        // const updatedData = [...data, newEntry];
        updateContactHandler({ id, name, email });
        setName("");
        setEmail("");
        navigate("/");
    }
    ``;
    return (
        <Container>
            <Title>Edit Contact</Title>
            <Form onSubmit={updateContact}>
                <Field>
                    <Label htmlFor="">Name</Label>
                    <Input
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Field>
                <Field>
                    <Label htmlFor="">Email</Label>
                    <Input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Field>
                <Button type="submit">Edit</Button>
            </Form>
        </Container>
    );
}

const Title = styled.h2`
    font-size: 24px;
    padding: 10px;
    margin-left: 40px;
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
`;

const Form = styled.form`
    width: 100%;
    max-width: 600px;
    background-color: #f9f9f9;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`;

const Field = styled.div`
    margin: 30px;
`;

const Label = styled.label`
    font-size: 20px;
    padding: 20px;
`;
const Input = styled.input`
    padding: 10px;
    border: 1px solid #e0e6ed;
    border-radius: 5px;
    font-size: 16px;
    width: 50%;
    ::placeholder {
        font-size: 12px;
        color: #aaa; /* Light gray placeholder text */
        font-style: italic; /* Optional: make it slightly different */
        opacity: 1; /* Fully visible */
    }
`;

const Button = styled.button`
    margin-left: 50px;
    font-size: 20px;
    height: 50px;
    width: 20%;
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
export default EditContact;

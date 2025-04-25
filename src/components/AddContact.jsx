import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

function AddContact({ addHandler }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();
    function addContact(e) {
        e.preventDefault();
        const id = uuidv4();

        // const newContact = { id , name, email };
        // const updatedData = [...data, newEntry];
        addHandler({ id: uuidv4(), name, email });
        setName("");
        setEmail("");
        navigate("/");
    }
    ``;
    return (
        <Container>
            <Title>AddContact</Title>
            <Form onSubmit={addContact}>
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
                <Button type="submit">Add</Button>
            </Form>
        </Container>
    );
}

const Title = styled.h2`
    font-size: 24px;
    padding: 10px;
    margin-left: 40px;
`;
const Container = styled.div``;
const Form = styled.form``;
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
export default AddContact;

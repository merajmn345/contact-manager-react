import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactDetails from "./components/ContactDetail";
const LOCAL_STORAGE_KEY = "contacts";

function App() {
    const [contacts, setContacts] = useState(() => {
        const retrived = localStorage.getItem(LOCAL_STORAGE_KEY);
        return retrived ? JSON.parse(retrived) : [];
    });

    function addHandler(newContact) {
        setContacts((prev) => [...prev, newContact]);
        console.log(contacts);
    }

    function removeContact(id) {
        const remainingContact = contacts.filter((contact) => {
            return contact.id != id;
        });
        setContacts(remainingContact);
    }

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }, [contacts]);
    return (
        <Router>
            <Title>Contact Manager</Title>
            <Container>
                <Routes>
                    <Route path="/" exact element={<ContactList contacts={contacts} removeContact={removeContact} />} />
                    <Route path="add-contact" element={<AddContact addHandler={addHandler} />} />
                    <Route path="/contact-detail/:id" element={<ContactDetails />} />
                </Routes>
            </Container>
        </Router>
    );
}

const Container = styled.div`
    max-width: 100vw;
    max-height: 100vh;
    border-radius: 5px;
    background: #f9f9f9;
    border-bottom: 1px solid #f9f9f9b2;
`;

const Title = styled.h2`
    text-align: center;
    font-size: 26px;
    font-weight: 600;
    margin-left: 30px;
`;
export default App;

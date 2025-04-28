import React, { useEffect, useState } from "react";
import styled from "styled-components";
import api from "../src/api/contacts.js";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import ContactDetails from "./components/ContactDetail";
import DeleteCard from "./components/DeleteCard";
import { v4 as uuidv4 } from "uuid";
import EditContact from "./components/EditContact.jsx";

// const LOCAL_STORAGE_KEY = "contacts";

function App() {
    const [contacts, setContacts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    // Retriveed Contacts
    const retrivedContacts = async () => {
        const response = await api.get("/contacts");
        return response.data;
    };

    const searchHandler = (searchTerm) => {
        if (searchTerm !== "") {
            const filterResult = contacts.filter((contact) => {
                return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
            });
            setSearchResult(filterResult);
        } else {
            setSearchResult(contacts);
        }
    };

    const addHandler = async (contact) => {
        // setContacts((prev) => [...prev, newContact]);
        console.log(contact);

        const request = {
            id: uuidv4(),
            ...contact,
        };

        const response = await api.post("/contacts", request);
        console.log(response);
        setContacts([...contacts, response.data]);
    };

    const updateContactHandler = async (contact) => {
        try {
            console.log("contact id", contact.id);
            const response = await api.put(`/contacts/${contact.id}`, contact);
            console.log("Updated contact:", response.data);

            const { id, name, email } = response.data;
            setContacts(
                contacts.map((contact) => {
                    return contact.id === id ? { ...response.data } : contact;
                })
            );
        } catch (error) {
            console.error("Axios error:", error.message);
            console.error("Full error object:", error);
        }
    };

    async function removeContact(id) {
        await api.delete(`/contacts/${id}`);
        const remainingContact = contacts.filter((contact) => {
            return contact.id != id;
        });
        setContacts(remainingContact);
        console.log("Deleted");
    }

    useEffect(() => {
        const getAllContacts = async () => {
            const allContacts = await retrivedContacts();
            if (allContacts) setContacts(allContacts);
        };
        getAllContacts();
    }, []);

    // useEffect(() => {
    //     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    // }, [contacts]);
    return (
        <Router>
            <Title>Contact Manager</Title>
            <Container>
                <Routes>
                    <Route
                        path="/"
                        exact
                        element={
                            <ContactList
                                contacts={searchTerm < 1 ? contacts : searchResult}
                                searchTerm={searchTerm}
                                setSearchTerm={setSearchTerm}
                                searchHandler={searchHandler}
                            />
                        }
                    />
                    <Route path="add-contact" element={<AddContact addHandler={addHandler} />} />
                    <Route path="/contact-detail/:id" element={<ContactDetails />} />
                    <Route path="/delete-confirmation/:id" element={<DeleteCard removeContact={removeContact} />} />
                    <Route path="/edit/:id" element={<EditContact updateContactHandler={updateContactHandler} />} />
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

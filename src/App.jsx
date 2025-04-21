import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import DisplayContact from "./components/DisplayContact";

function App() {
    const retriveData = () => {
        const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        return retriveContacts ? retriveContacts : [];
    };

    const LOCAL_STORAGE_KEY = "contacts";
    const [contacts, setContacts] = useState(retriveData);

    const addContactHandler = function (contact) {
        setContacts(contact);
    };

    const deleteHandler = function (id) {
        const filtered = contacts.filter((contact) => {
            return contact.id !== id;
        });
        setContacts(filtered);
        console.log(filtered);
    };

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }, [contacts]);
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
                <Route path="/" element={<DisplayContact contacts={contacts} deleteHandler={deleteHandler} />} />
            </Routes>
            {/* <AddContact addContactHandler={addContactHandler} />
                <DisplayContact contacts={contacts} deleteHandler={deleteHandler} /> */}
        </Router>
    );
}

export default App;

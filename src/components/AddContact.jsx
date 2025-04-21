import React, { useState } from "react";
import "./AddContact.css";
import { v4 as uuidv4 } from "uuid";

function AddContact({ addContactHandler }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [data, setData] = useState([]);

    const handleSubmit = function (e) {
        e.preventDefault();
        const id = uuidv4();
        const newEntry = { id, name, email };
        const updateData = [...data, newEntry];
        setData(updateData);
        setName("");
        setEmail("");
        addContactHandler(updateData);
    };
    return (
        <form className="contact-field" onSubmit={handleSubmit}>
            <h3>Add Contact</h3>
            <div className="field">
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="field">
                <label htmlFor="email">Email</label>
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <button className="submit-btn">Add</button>
        </form>
    );
}

export default AddContact;

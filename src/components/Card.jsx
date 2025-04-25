import React from "react";
import styled from "styled-components";
import User from "../images/image.png";
import { FaRegTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Card(props) {
    const { id, name, email } = props.contact;
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/contact-detail/${id}`, { state: { contact: props.contact } });
    };
    return (
        <UserDetails>
            <Container>
                <Image src={User} alt="Logo" width="60" />
                <div onClick={() => handleNavigate()} style={{ cursor: "pointer" }}>
                    <H>{name}</H>
                    <p>{email}</p>
                </div>
                <FaRegTrashAlt
                    style={{ height: "30px", width: "30px", color: "red", cursor: "pointer" }}
                    onClick={() => props.removeContact(id)}
                />
            </Container>
        </UserDetails>
    );
}

const UserDetails = styled.div`
    background: #ffffff;
    border: 1px solid #e0e6ed;
    border-radius: 12px;
    padding: 30px;
    margin-left: 30px;
    margin-top: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
    max-width: 400px;
    transition: 0.3s ease;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 20px 20px;
    max-width: 100%;
`;
const ContactDetails = styled.div`
    /* margin: -2px 0px; */
    margin-left: 0px;
`;

const H = styled.h4`
    margin: 5px;
    font-weight: 600;
`;

const Image = styled.img`
    padding: 10px 10px;
    border: none;
    border-radius: 50px;
`;

export default Card;

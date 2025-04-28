import React from "react";
import styled from "styled-components";
import User from "../images/image.png";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Card(props) {
    const { id, name, email } = props.contact;
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/contact-detail/${id}`, { state: { contact: props.contact } });
    };

    const handleDeleteNavigate = () => {
        navigate(`/delete-confirmation/${id}`, { state: { contact: props.contact } });
    };
    const handleEditNavigate = () => {
        navigate(`/edit/${id}`, { state: { contact: props.contact } });
    };

    return (
        <StyledCard>
            <Profile>
                <Avatar src={User} alt="Logo" />
            </Profile>
            <UserInfo onClick={handleNavigate}>
                <Name>{name}</Name>
                <Email>{email}</Email>
            </UserInfo>
            <Actions>
                <FaRegEdit onClick={handleEditNavigate} />
                <FaRegTrashAlt onClick={handleDeleteNavigate} />
            </Actions>
        </StyledCard>
    );
}

const StyledCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    border: 1px solid #ddd;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    margin-bottom: 16px;
`;

const Profile = styled.div`
    flex-shrink: 0;
`;

const Avatar = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
`;

const UserInfo = styled.div`
    flex: 1;
    margin-left: 16px;
    cursor: pointer;
`;

const Name = styled.h3`
    margin: 0;
    font-size: 18px;
    font-weight: 600;
`;

const Email = styled.p`
    margin: 4px 0 0;
    font-size: 14px;
    color: #555;
`;

const Actions = styled.div`
    display: flex;
    gap: 12px;

    svg {
        height: 24px;
        width: 24px;
        cursor: pointer;
        transition: transform 0.2s ease;

        &:hover {
            transform: scale(1.1);
        }

        &:first-child {
            color: #007bff;
        }

        &:last-child {
            color: #dc3545;
        }
    }
`;

export default Card;

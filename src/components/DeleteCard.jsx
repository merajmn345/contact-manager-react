import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

function DeleteCard({ removeContact }) {
    const location = useLocation();
    const contact = location.state?.contact;

    const navigate = useNavigate();

    const cancelDelete = () => {
        navigate("/");
    };

    return (
        <Container>
            <Card>
                <Title>Are you sure?</Title>
                <Message>This action cannot be undone. Do you really want to delete this?</Message>
                <ButtonGroup>
                    <Button variant="cancel" onClick={cancelDelete}>
                        Cancel
                    </Button>
                    <Button
                        variant="delete"
                        onClick={() => {
                            removeContact(contact.id);
                            navigate("/");
                        }}
                    >
                        Delete
                    </Button>
                </ButtonGroup>
            </Card>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f8f9fa;
`;

const Card = styled.div`
    background-color: white;
    padding: 2rem;
    border-radius: 16px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    text-align: center;
`;

const Title = styled.h2`
    color: #dc3545;
    margin-bottom: 1rem;
`;

const Message = styled.p`
    font-size: 1.1rem;
    color: #333;
`;

const ButtonGroup = styled.div`
    margin-top: 1.5rem;
    display: flex;
    gap: 1rem;
`;

const Button = styled.button`
    padding: 0.6rem 1.2rem;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.3s ease;

    ${({ variant }) =>
        variant === "cancel"
            ? `
      background-color: #6c757d;
      color: white;

      &:hover {
        background-color: #5a6268;
      }
    `
            : `
      background-color: #dc3545;
      color: white;

      &:hover {
        background-color: #c82333;
      }
    `}
`;

export default DeleteCard;

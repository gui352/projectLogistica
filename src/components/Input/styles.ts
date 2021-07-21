import styled from "styled-components";

export const Container = styled.div`
    background: #232129;
    border-radius: 10px;
    border: 2px solid #232129;
    padding: 16px;
    width: 100%;
    color: #666360;

    display: flex; 
    aling-icons: center;

    & + div{
        margin-top: 8px;
    }

    input {
        flex: 1;
        background: transparent;
        border: 0;
        color: #4ede8;
        
        &::placeholder {
            color: #666360;
        }
    }
`;
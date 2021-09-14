import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import api from "../../services/api";

interface Pessoa {
    telefone: String,
    nome: String,
}


const Dashboard:React.FC = () => {
    const [pessoas, setPessoas] = useState<Pessoa[]>([]);
    useEffect(() => {
        api.get("/pessoas").then(response => {
            setPessoas(response.data)
        });
    }, []);
    return (
        <>
            <Container>
                <h1>Apenas</h1>
                {}
                {pessoas.map(pessoa => 
                <div>
                    <p>{pessoa.nome}</p>
                    <p>{pessoa.telefone}</p>
                </div>
                )}
            </Container>
        </>
    );
};

export default Dashboard;
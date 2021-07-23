import React from "react";
import { FiUser, FiLock, FiArrowLeft } from 'react-icons/fi';

import Input from "../../components/Input";
import Button from "../../components/Button";

import { Container, Content, Background } from './styles'

const SignUp: React.FC = () => (
    <Container>
        <Background/>
        <Content>
            <form>
                <h1>Faça seu cadastro</h1>

                <Input icon={FiUser} name="email" placeholder="E-mail"/>
                <Input icon={FiLock} name="senha" type="password" placeholder="Senha"/>

                <Button type="submit">Cadastrar</Button>

            </form>

            <a href="teste">
                <FiArrowLeft/>
                Voltar para o login</a>

        </Content>
    </Container>
);

export default SignUp;
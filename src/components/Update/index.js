import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Update() {
    let history = useNavigate();
    const [id, setID] = useState(null);
    const [telefone, setTelefone] = useState('');
    const [cpf, setCPF] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [datanasc, setData] = useState('');
    const [cep, setCep] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');

    useEffect(() => {
            setID(localStorage.getItem('ID'))
            setTelefone(localStorage.getItem('Tel'));
            setCPF(localStorage.getItem('cpf'));
            setNome(localStorage.getItem('Name'))
            setEmail(localStorage.getItem('email'))
            setSenha(localStorage.getItem('senha'))
            setData(localStorage.getItem('datanasc'))
            setCep(localStorage.getItem('cep'))
            setBairro(localStorage.getItem('bairro'))
            setCidade(localStorage.getItem('cidade'))
            setEstado(localStorage.getItem('estado'))

    }, []);

    const updateAPIData = () => {
        console.log(nome);
        axios.put(`http://localhost:8080/alunos`, {
            id, 
            telefone,
            cpf,    
            nome, 
            email, 
            senha,
            datanasc, 
            cep, 
            bairro, 
            cidade,
            estado
             
        })
        .then(() => {
            history('/')
        })
    }

    return (
        <div>
            <Form className="create-form" widths='100%'>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Nome' placeholder='Nome' value={nome} onChange={(e) => setNome(e.target.value)}/>
                    <Form.Input fluid label='E-mail' placeholder='E-mail' value={email} onChange={(e) => setNome(e.target.value)}/>
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='CEP' placeholder='CEP' value={cep} onChange={(e) => setNome(e.target.value)}/>
                    <Form.Input fluid label='CPF' placeholder='cpf' value={cpf} onChange={(e) => setNome(e.target.value)}/>
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Cidade' placeholder='cidade' value={cidade} onChange={(e) => setNome(e.target.value)}/>
                    <Form.Input fluid label='Estado' placeholder='estado' value={estado} onChange={(e) => setNome(e.target.value)}/>
                </Form.Group>
                <Form.Group widths='50%'>
                    <Form.Input fluid label='Telefone' placeholder='telefone' value={telefone} onChange={(e) => setNome(e.target.value)}/>
                    <Form.Input fluid label='Data de Nascimento' placeholder='data de nascimento' value={datanasc} onChange={(e) => setNome(e.target.value)}/>
                </Form.Group>
                <Form.Group widths='equal'>
                <Form.Input fluid label='Bairro' placeholder='Bairro' value={bairro} onChange={(e) => setNome(e.target.value)}/>
                </Form.Group>
                <Form.Button onClick={updateAPIData}>Update</Form.Button>
            </Form>
        </div>
    )
}
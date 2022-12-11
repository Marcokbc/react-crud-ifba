import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';


export default function Create() {
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
    let history = useNavigate();

    const postData = () => {
        axios.post(`http://localhost:8080/alunos`, {
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
        }).then(() => {
            history('/')
        })
    }
    return (
        <div>
                <Form className="create-form" widths='100%'>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Nome' placeholder='Nome' onChange={(e) => setNome(e.target.value)}/>
                    <Form.Input fluid label='E-mail' placeholder='E-mail' onChange={(e) => setNome(e.target.value)}/>
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='CEP' placeholder='CEP' onChange={(e) => setNome(e.target.value)}/>
                    <Form.Input fluid label='CPF' placeholder='cpf' onChange={(e) => setNome(e.target.value)}/>
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input fluid label='Cidade' placeholder='cidade' onChange={(e) => setNome(e.target.value)}/>
                    <Form.Input fluid label='Estado' placeholder='estado' onChange={(e) => setNome(e.target.value)}/>
                </Form.Group>
                <Form.Group widths='50%'>
                    <Form.Input fluid label='Telefone' placeholder='telefone' onChange={(e) => setNome(e.target.value)}/>
                    <Form.Input fluid label='Data de Nascimento' placeholder='data de nascimento' onChange={(e) => setNome(e.target.value)}/>
                </Form.Group>
                <Form.Group widths='equal'>
                <Form.Input fluid label='Bairro' placeholder='Bairro' onChange={(e) => setNome(e.target.value)}/>
                </Form.Group>
                <Form.Button onClick={postData}>Submit</Form.Button>
            </Form>
        </div>
    )
}
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Read() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
                axios.get(`http://localhost:8080/alunos`)
                    .then((response) => {
                        setAPIData(response.data);
                        console.log(response.data);
                    })
            }, [])

    const setData = (data) => {
                let { id, telefone, cpf, nome, email, senha, datanasc, cep, bairro, cidade, estado } = data;
                localStorage.setItem('ID', id);
                localStorage.setItem('Tel', telefone);
                localStorage.setItem('cpf', cpf);
                localStorage.setItem('Name', nome);
                localStorage.setItem('email', email);
                localStorage.setItem('senha', senha);
                localStorage.setItem('datanasc', datanasc);
                localStorage.setItem('cep', cep);
                localStorage.setItem('bairro', bairro);
                localStorage.setItem('cidade', cidade);
                localStorage.setItem('estado', estado);
            }

    const onDelete = (id) => {
        axios.delete(`http://localhost:8080/alunos/${id}`)
        .then(() => {
            getData();
        })
    }

    const getData = () => {
        axios.get(`http://localhost:8080/alunos`)
            .then((getData) => {
                 setAPIData(getData.data);
             })
    }

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nome</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>CEP</Table.HeaderCell>
                        <Table.HeaderCell>Cidade</Table.HeaderCell>
                        <Table.HeaderCell>Estado</Table.HeaderCell>
                        <Table.HeaderCell>Telefone</Table.HeaderCell>
                        <Table.HeaderCell>Data de Nascimento</Table.HeaderCell>
                        <Table.HeaderCell>Bairro</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                {APIData.map((data) => {
                    return (
                    <Table.Row>
                        <Table.Cell>{data.nome}</Table.Cell>
                        <Table.Cell>{data.email}</Table.Cell>
                        <Table.Cell>{data.cep}</Table.Cell>
                        <Table.Cell>{data.cidade}</Table.Cell>
                        <Table.Cell>{data.estado}</Table.Cell>
                        <Table.Cell>{data.telefone}</Table.Cell>
                        <Table.Cell>{data.datanasc}</Table.Cell>
                        <Table.Cell>{data.bairro}</Table.Cell>
                        <Table.Cell>
                            <Link to='/update'>
                                <Button onClick={() => setData(data)}>Update</Button>
                            </Link>
                        </Table.Cell>
                        <Table.Cell>
                            <Button onClick={() => onDelete(data.id)}>Delete</Button>
                        </Table.Cell>
                    </Table.Row>
                )})}
                </Table.Body>
            </Table>
        </div>
    )
}
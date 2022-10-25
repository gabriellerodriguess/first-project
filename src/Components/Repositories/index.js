import React, {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom'
import * as S from './styled';

export default function Repositories() {
    const navigate = useNavigate();
    const [repositories , setRepositories ] = useState([])
    useEffect(() => {
        let repoList = localStorage.getItem('repositórios')

        if(repoList !== null) {
            repoList = JSON.parse(repoList)
            setRepositories(repoList)
        } else {
            navigate('/')
        }
    }, [])

    //useEffect monitora a ação de determinado elemento e renderiza uma função quando houver mudança de estado
    return (
        <div>
            <S.Title>Repositories</S.Title>
            <S.List>
                {repositories.map(repository => {
                    return (
                        <S.ListItem > Repositório: { repository || [] } </S.ListItem>
                    )
                })}
            </S.List>   
                <S.LinkHome to="/">Voltar</S.LinkHome>
        </div>
    )
}
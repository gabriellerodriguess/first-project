import './style.css';
import React, {useState} from 'react';
import axios from 'axios'; 
import *  as S from './styled';
import { useNavigate } from 'react-router-dom'

function App(props) {
  const navigate = useNavigate()
  const [user, setUser] = useState('')
  const [ erro, setErro] = useState(false)
  //retorna um array [valor do estado (user), função para setar o valor do estado (setUser)]

  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${user}/repos`)
    .then(response => {
      const repo = response.data
      const nameRepo = []
      repo.map(repository => {
        nameRepo.push(repository.name)        
      })
      setErro(false)
      localStorage.setItem('repositórios', JSON.stringify(nameRepo))
      navigate('/repositories')
    }).catch(err => {
      setErro(true)
    })
  }
  return (
    <S.HomeContainer>
        <S.Content>
          <S.Input placeholder="user" className="user--input" value={user || ''} onChange={e => setUser(e.target.value)}/>
          <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
        </S.Content>
        {erro ? <S.MessageError>Ocorreu um erro. Tente Novamente</S.MessageError> : ''}
        
    </S.HomeContainer>
  );
}

export default App;

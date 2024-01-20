import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import styles from '../Comum.module.css';

const Signup = () => {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [noventadias, setNoventadias] = useState(false); 

   const handleSubmit = async (e) =>{
    e.preventDefault();

    const hashedPassword = bcrypt.hashSync(password) // hash created previously created upon sign up

    let resposta;

    try{
      setPasswordConfirm(password);

        resposta = await axios.post('http://127.0.0.1:3001/api/v2/usuarios/signup', {
          nome,
          email,
          password,
          passwordConfirm

      });

      console.log(resposta);
      

      localStorage.setItem('accessToken', resposta.data.token);
    }
  catch(err){
    console.log(err.response);
  }

   }

  return (
    <form onSubmit={handleSubmit}>
        <div>
          <h4>Criar conta no eFichario</h4>
          </div>

          <div className={styles.sub}>
            <label>Nome do Usuário.</label>
            <input value={nome} onChange={e => setNome(e.target.value)}></input>
        </div>
        <div className={styles.sub}>
            <label>Endereço de email.</label>
            <input value={email} onChange={e => setEmail(e.target.value)}></input>
        </div>
        <div className={styles.sub}>
            <label>Senha</label>
            <input value={password} onChange={e => setPassword(e.target.value)}></input>
        </div>
        <div className={styles.sub} >
            <label>Confirmar Senha</label>
            <input value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)}></input>
        </div>
        <div className={styles.sub} >
            <input type="checkbox" value={noventadias} onChange={e => setNoventadias(e.target.value)} />
        </div>
        <div className={styles.sub} >
            <button>Criar Conta Gratuita</button>
        </div>

        <div className={styles.sub} >
            <button>Já tenho uma conta!</button>
        </div>
    </form>
  )
}

export default Signup
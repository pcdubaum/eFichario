import React from 'react'
import { useState, useEffect } from 'react';
import styles from './CriarLei.module.css'
import Paragrafos from '../components/Paragrafos';
import axios from "axios";

const CriarLei = () => {

    const [data, setData] = useState([]);

    const [carregamento, setCarregamento] = useState(false);
    const [artigos, setArtigos] = useState([]);
    const [paragrafos, setParagrafos] = useState([{numero:0, content:""}]);
    const [lei, setLei] = useState([]);
    const [nome, setNome] = useState("");
    const [autor, setAutor] = useState("");
    const [curso, setCurso] = useState("");

    const [artigosAtual, setArtigoAtual] = useState(1);

    const handleClick = (e) => {
        setData([...data, { numero: e, titulo: "", paragrafos: [] }])
        setArtigoAtual(artigosAtual + 1);
      }

      const handleDelete = (i) => {
        const deleteVal = [...data]
        deleteVal.splice(i, 1)
        setData(deleteVal)
        setArtigoAtual(artigosAtual--)
      }

      const handleNovoParagrafo = (e) =>
      {
        console.log("Paragrafo Adicionado")
        setParagrafos([...paragrafos, { numero: artigosAtual - 1, content: "" }])
      }

      const handleChange = (e, i) => {
        const { name, value } = e.target
        const onChangeVal = [...data]
        onChangeVal[i][name] = value
        setData(onChangeVal)
      }

      const handleCriarLei = async () => {

       lei.nome = nome;
       lei.autor = autor;
       lei.criadoEm = new Date().toLocaleString() + "";

       data.forEach(element => {

        const _paragrafos = [];

        paragrafos.forEach(element2 => {

          if(element.numero === element2.numero)
           _paragrafos.push({paragrafo: element2.content})
          console.log(element2.content)
          
        });

        element.paragrafos.push(_paragrafos)
        
       });

       lei.dados = data;
       lei.artigos = artigos.length;
       lei.materias = curso;

       

       setLei(lei);
       console.log(lei);

       await axios.post("http://192.168.0.107:3001/api/v2/leis/", {
        nome: lei.autor, dados: lei.dados, criadoEm:  new Date().toLocaleString() + "", artigos: lei.artigos, materias: lei.materias,
   
      }).then(response => {
        console.log(response)
        // Handle response
      });


      }

      const handleNome = (e) => {
        setNome(e.target.value);
      }

      const showParagrafos = () => {
        
      }

      const handleAutor = (e) =>{
        setAutor(e.target.value);
      }

      const handleCurso = (e) =>{
        setCurso(e.target.value);
      }

  return (
    <div> 
    <div className={styles.linha}>
    <p className={styles.titulo}> Numero da lei </p>
    <div className={styles.div_artigo}> <input name='nome' type='text'  onChange={(e) => handleNome(e)} /> </div>
    </div>

    <div className={styles.linha}>
    <p className={styles.titulo} name="tag">Criada por</p>
    <div className={styles.div_artigo}> <input name="content"  onChange={(e) => handleAutor(e)} /> </div>
    </div>

    <div className={styles.linha}>
    <p className={styles.titulo} name="tag">Curso</p>
    <div className={styles.div_artigo}> <input name="content"  onChange={(e) => handleCurso(e)} /> </div>
    </div>

    {data[0] !== undefined &&
        data.map((val, i) => 

        <div>
        <div key={i} className={styles.linha}> 


        <p className={styles.titulo} name="tag"> {val.tag} </p>
         <p className={styles.titulo}>Artigo: {val.numero}</p> <input name="titulo" value={val.content} onChange={(e) => handleChange(e, i)} /> 
        <button id={styles.btx} onClick={(e) => handleDelete(i)} >X</button>
        <button id={styles.bta} onClick={(e) => handleDelete(i)} >+</button>

</div>
        <Paragrafos lista = {paragrafos} numero={i + 1} />
      </div>
      
  
    )
        
      }

    <div className={styles.botoes}>
      <button id={styles.bt1} onClick={(e) => handleClick(artigosAtual)}>Adicionar Artigo</button>
    </div>

    <div className={styles.botoes}>
      <button id={styles.bt1} onClick={(e) => handleNovoParagrafo(e)}>Adicionar Paragrafo</button>
      <button id={styles.bt3} onClick={(e) => handleClick("aviso")}>Adicionar Aviso</button>
      <button id={styles.bt2} onClick={(e) => handleClick("cuidado")}>Adicionar Cuidado</button>
    </div>
    <button id={styles.bt2} onClick={(e) => handleCriarLei("cuidado")}>Criar Lei</button>
    </div>
  )
}

export default CriarLei
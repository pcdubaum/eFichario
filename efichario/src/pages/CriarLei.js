import React from 'react'
import { useState, useEffect } from 'react';
import styles from './CriarLei.module.css'
import Paragrafos from '../components/Paragrafos';
import axios from "axios";
import Artigo from '../components/Artigo';

const CriarLei = () => {

  const [titulos, setTitulos] = useState([{cs:2}]);
  const [artigos, setArtigos] = useState([]);

  const handleTituloClick = (e) => {
    setTitulos([...titulos, { numero: 0, conteudo: "Novo Titulo" }]);
  }
  
  const handleArtigoClick = (e) => {
    setArtigos([...artigos, { numero: 0, titulo: 1, conteudo: "Novo Artigo" }]);
  }

  return (
    <div> 
     {titulos.map((val, i) =>   
     <div >
     <div key={i} className={styles.linha}>
       <p className={styles.titulo}>Titulo: {val.numero}</p> <input name="conteudo" value={val.content}   />  
     </div>

    <Artigo artigos = {artigos} /> 
    <button id={styles.bt1} onClick={(e) => handleTituloClick(e)}>Adicionar Titulo</button>
    <button id={styles.bt1} onClick={(e) => handleArtigoClick(e)}>Adicionar Artigo</button>
    </div>)}
    {console.log(artigos)}
    </div>
  )

  /*const [carregamento, setCarregamento] = useState(false);

  const [dados, setDados] = useState([]);
  const [artigos, setArtigos] = useState([]);
  const [paragrafos, setParagrafos] = useState([]);
  const [alineas, setAlineas] = useState([]);

  const [tituloAtual, setTituloAtual] = useState(0);
  const [artigoAtual, setArtigoAtual] = useState(0);
  const [paragrafoAtual, setParagrafoAtual] = useState(0);

  const [adicionar, setAdicionar] = useState(false);

  const handleTituloClick = (e) => {
    setDados([...dados, { numero: tituloAtual, conteudo: "Titulo " + tituloAtual, paragrafos: [] }]);
    setTituloAtual(tituloAtual + 1);
  }

  const handleArtigoClick = (e) => {
    setArtigos([...artigos, { numero: artigoAtual, titulo: tituloAtual - 1, conteudo: "s" }]);
    setArtigoAtual(artigoAtual + 1);

    setAdicionar(true);
  }

  const handleParagrafoClick = (e) => {
    setParagrafos([...paragrafos, { numero: paragrafoAtual, artigo: artigoAtual, conteudo: "Paragrafo " + paragrafos.length }]);
    setParagrafoAtual(paragrafoAtual + 1);
  }

  const handleAlineaClick = (e) => {
    setAlineas([...alineas, { numero: e, titulo: "" }])
  }

  const handleFormatarLei = (e) => {
    dados.forEach((val, ind) => {

      val.paragrafos = [];

      artigos.forEach((val2) => {

        console.log(val2.conteudo)
        if (val.numero === val2.titulo)
          val.paragrafos.push({ numero: val2.numero, titulo: val2.titulo, conteudo: val2.conteudo})

      })
    }
    )

  }

  useEffect(() => {

    const iniciarValores = () => {

      setTituloAtual(0);
      setArtigoAtual(1);

      setCarregamento(true);

    }

    if (!carregamento) {
      iniciarValores();
    }
  }, []);

  useEffect(() => {
    const iniciarValores = () => {

      handleFormatarLei();
      setArtigos([...artigos])
      setAdicionar(false);

    }
    if (adicionar) {
      iniciarValores();
    }
  }, [adicionar]);

  useEffect(() => {
    const iniciarValores = () => {

      console.log("d")
    setArtigos(artigos);
    handleFormatarLei();

    }
    if (adicionar) {
      iniciarValores();
    }
  }, [artigos]);

  const handleChange = (e, i) => {
    
    const { name, value} = e.target;
    const onChangeVal = [...dados];
    onChangeVal[i][name] = value;
    setDados(onChangeVal);

    console.log(dados);
  }

  return (

    <div>
      <p className={styles.titulo}>Número de Titulos: {tituloAtual}</p>
      <p className={styles.titulo}>Número de Artigos: {artigos.length}</p>
      <p className={styles.titulo}>Número de Paragrafos: {paragrafos.length}</p>
      <p className={styles.titulo}>Número de Alíneas {alineas.length}</p>
      <div>

        {dados.map((val, i) =>
          <div >
            <div key={i} className={styles.linha}>
              <p className={styles.titulo}>Titulo: {val.numero}</p> <input name="conteudo" value={val.content}  onChange={(e) => handleChange(e, i)} />  
            </div>
            {val.paragrafos.map((val2, j) =>
            <div><Artigo artigos = {artigos} /> </div>)}
          </div>
        )
        }
      </div>
      <p className={styles.titulo}>{/*console.log(dados)}</p>
      <p className={styles.titulo}>{/*console.log(artigos)}</p>
      {carregamento && <div className={styles.botoes}>
        <button id={styles.bt1} onClick={(e) => handleTituloClick(e)}>Adicionar Titulo</button>
        <button id={styles.bt1} onClick={(e) => handleArtigoClick(e)}>Adicionar Artigo</button>
        <button id={styles.bt1} onClick={(e) => handleParagrafoClick(e)}>Adicionar Paragrafo</button>
        <button id={styles.bt1} onClick={(e) => handleFormatarLei(e)}>Adicionar Alinea</button>
      </div>}
    </div>

  )*/

  /*const [data, setData] = useState([]);

  const [carregamento, setCarregamento] = useState(false);
  const [titulos, setTitulos] = useState([]);
  const [artigos, setArtigos] = useState([]);
  const [paragrafos, setParagrafos] = useState([{numero:0, content:""}]);
  const [lei, setLei] = useState([]);
  const [nome, setNome] = useState("");
  const [autor, setAutor] = useState("");
  const [curso, setCurso] = useState("");

  const [artigosAtual, setArtigoAtual] = useState(1);
  const [tituloAtual, setTituloAtual] = useState(1);

  const handleClick = (e) => {
      setData([...data, { numero: e, titulo: "", titulos: [] }])
      setTituloAtual(tituloAtual + 1);
    }

    const handleNovoArtigo = (e) =>
    {
      console.log("Artigo Adicionado")
      setArtigos([...artigos, { numero: artigosAtual -1, titulo: "", artigos: [] }])
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

     await axios.post("http://127.0.0.1:3001/api/v2/leis/", {
      nome: lei.autor, dados: lei.dados, criadoEm:  new Date(), artigos: lei.artigos, materias: lei.materias,
 
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
      <p className={styles.titulo}>Titulo: {val.numero}</p> <input name="titulo" value={val.content} onChange={(e) => handleChange(e, i)} /> 
      <button id={styles.btx} onClick={(e) => handleDelete(i)} >X</button>
      <button id={styles.bta} onClick={(e) => handleDelete(i)} >+</button>

      </div>
      <Artigo lista = {artigos} numero={i + 1} />
    </div>
    
 
  )
      
    }

  <div className={styles.botoes}>
    <button id={styles.bt1} onClick={(e) => handleClick(tituloAtual)}>Adicionar Titulo</button>
  </div>

  <div className={styles.botoes}>
    <button id={styles.bt1} onClick={(e) => handleNovoArtigo(artigosAtual)}>Adicionar Artigo</button>
    <button id={styles.bt3} onClick={(e) => handleClick("aviso")}>Adicionar Aviso</button>
    <button id={styles.bt2} onClick={(e) => handleClick("cuidado")}>Adicionar Cuidado</button>
  </div>
  <button id={styles.bt2} onClick={(e) => handleCriarLei("cuidado")}>Criar Lei</button>
  </div>
)*/
}

export default CriarLei
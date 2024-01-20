import React, { useState } from 'react'

const Artigo = (artigos) => {
  
  console.log(artigos)

  const handleChange = (e, i) => {

    const { name, value} = e.target;
    const onChangeVal = [...artigos.artigos];
    onChangeVal[i][name] = value;
  }
  
    return (

    <div>
          {artigos.artigos !== undefined && artigos.artigos.map((val, i) => 
          <div>
           <p>Artigo: {artigos.artigos[0].numero} - Titulo: {artigos.artigos[0].titulo}</p> <input name="conteudo"   onChange={(e) => handleChange(e , i) } />  
           </div> )}

        
</div>

  )


}

export default Artigo
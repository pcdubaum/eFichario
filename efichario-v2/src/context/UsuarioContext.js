import { createContext, useState } from 'react';

export const UsuarioContext = createContext();

export const UsuarioContextProvider = ({ children }) => {

    const [nome, setNome] = useState(localStorage.getItem('nome'));
    const [token, setToken] = useState(undefined);

    return(
        <UsuarioContext.Provider value = {{nome, setNome, token, setToken}}>
            {children}
        </UsuarioContext.Provider>
    )
}

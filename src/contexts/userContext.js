import { createContext, useState } from "react";

export const UsuarioContexto = createContext();

//componete tem que comecar com letra maiuscula
export const UsuarioStore = ({children}) => {
    const [login, setLogin] = useState(false);
    // let [data, setData] = useState({});

    // useEffect(() => {
    //     setData({nome: "nelson", idade: 37});
    // }, []);

    return (
        <UsuarioContexto.Provider value={{login, setLogin}}>
            {children}
        </UsuarioContexto.Provider>
    )
}
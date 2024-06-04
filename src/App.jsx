import React, { useEffect } from "react";
import DataTable from "./components/table/DataTable";
import axios from "axios";

function App() {

  const [dados,setDados] = React.useState([])


   const getProdutos = async () => {
    const URL_PRODUTOS = "https://dripstore-api.onrender.com/api/produto";
    try {
      const res = await axios.get(URL_PRODUTOS);
      console.log(res.data);
      setDados(res.data)
    } catch (error) {
      console.log(`erro ao buscar o produto ${error}`);
    }
  };

  useEffect(() => {
    getProdutos();
  }, []);

  return (
    <>
      <DataTable dados = {dados}/>

    </>
  );
}

export default App;

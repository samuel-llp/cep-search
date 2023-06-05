import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './style.css';
import api from "./services/api";

function Descobrir() {

  const [inputUf, setInputUf] = useState("");
  const [inputCidade, setInputCidade] = useState("");
  const [inputEndereco, setInputEndereco] = useState("");
  const [cep, setCep] = useState();

  async function handleSearch(){
    if(inputUf === ''){
      alert("Por favor, preencha algum CEP.")
      return;
    } 
    if(inputCidade === ''){
      alert("Por favor, preencha algum CEP.")
      return;
    } 
    if(inputEndereco === ''){
      alert("Por favor, preencha algum CEP.")
      return;
    } 

    try {
      const response = await api.get(`${inputUf}/${inputCidade}/${inputEndereco}/json`);
      setCep(response.data);
      console.log(response.data);
      setInputUf("");
      setInputCidade("");
      setInputEndereco("");

    } catch {
      alert("Este CEP não existe, por favor digite novamente.");
      setInputUf("");
      setInputCidade("");
      setInputEndereco("");    }
  }

  return (
    <div className="container">
      <h1 className="title">Busca Local</h1>
        <div className="containerInput">
            <input
            type="text"
            placeholder="Digite a UF"
            value={inputUf}
            onChange={(e) => setInputUf(e.target.value)}
            />
        </div>

        <div className="containerInput">
            <input
            type="text"
            placeholder="Digite sua Cidade"
            value={inputCidade}
            onChange={(e) => setInputCidade(e.target.value)}
            />
        </div>

        <div className="containerInput">
            <input
            type="text"
            placeholder="Digite seu Endereço"
            value={inputEndereco}
            onChange={(e) => setInputEndereco(e.target.value)}
            />
        </div>

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#FFF"/>
        </button>
        <div className='listitens'>
      {cep && cep.map((item)=>(
          
          <main className='main'>
          <h2>CEP: {item.cep}</h2>
          <span>{item.logradouro}</span>
          <span>Complemento: {item.complemento}</span>
          <span>{item.bairro}</span>
          <span>{item.localidade} - {item.uf}</span>
        </main>
    )
    )}
    </div>
    </div>
  );
}

export default Descobrir;

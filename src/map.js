import './style.css';

{ceps && ceps.map(data=>(
    <article key={data.cep} className='main'>
        <main className='main'>
            <h2>
                <span>CEP: </span>
                <span>{data.cep}</span>
            </h2>
            <p>
                <span>Bairro: </span>
                <span>{data.bairro}</span>
            </p>
            <p>
                <span>Complemento: </span>
                <span>{data.complemento}</span>
            </p>
            <p>
                <span>DDD: </span>
                <span>{data.ddd}</span>
            </p>
            {/* <p>
            <span>GIA: </span>
            <span>{data.gia}</span>
            </p>
            <p>
            <span>IBGE: </span>
            <span>{data.ibge}</span>
            </p> */}
            <p>
                <span>Cidade: </span>
                <span>{data.localidade}</span>
            </p>
            <p>
                <span>Endereço: </span>
                <span>{data.logradouro}</span>
            </p>
            {/* <p>
            <span>siafi: </span>
            <span>{data.siafi}</span>
            </p> */}
            <p>
                <span>Estado: </span>
                <span>{data.uf}</span>
            </p>
        </main>
    </article>
  ))}
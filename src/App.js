import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';


function App() {

  const times = [
    {
      nome: 'Obras de Distribuição e Transmissão',
      corNome: '#57C278',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Financeiro',
      corNome: '#82CFFA',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'RH e Viagens',
      corNome: '#A6D157',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Contábil',
      corNome: '#E06B69', 
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Suprimentos',
      corNome: '#D86E8F',
      corPrimaria: '#D86E8F',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Manutenção',
      corNome: '#FFBA09',
      corPrimaria: '#FFBA09',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Canais Convencionais',
      corNome: '#FF8A29', 
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEDEF'
    }]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log('Colaborador:', colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />  
      <Formulario 
        times={times.map(time => time.nome)}
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}>
      </Formulario> 
      
      {times.map(time => {

        const filtrados = colaboradores.filter(colaborador => colaborador.time === time.nome);
        console.log('Comparando:', time.nome, filtrados);

        return (
          <Time 
            key={time.nome}
            nome={time.nome}
            corNome={time.corNome}
            corPrimaria={time.corPrimaria}
            corSecundaria={time.corSecundaria}
            colaboradores={filtrados}
          />
        );
      })}
    </div>
  );
}

export default App;

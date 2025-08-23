import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {
    const times = [
        'Obras de Distribuição e Transmissão',
        'Financeiro',
        'RH e Viagens',
        'Contábil',
        'Suprimentos',
        'Manutenção',
        'Canais Convencionais',
        'Canais Digitais',
        'Faturamento',
        'Operações e Despacho'
    ]

    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" 
                    placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" 
                    placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" 
                    placeholder="Digite o endereço da imagem" />
                <ListaSuspensa label="Times" itens={times}/>
            </form>
        </section>
    )
}

export default Formulario
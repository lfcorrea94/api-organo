import './Time.css';
import Colaborador from '../Colaborador';

const Time = (props) => {
    
    const css = {backgroundColor: props.corSecundaria}

    return (
        <section className='time' style={css}>
            <h3
                style={{
                    borderColor: props.corPrimaria,
                    color: props.corNome
                }}
            >
                {props.nome}</h3>
                {props.colaboradores.map( 
                    colaborador => <Colaborador 
                    nome={colaborador.nome}
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem} >                                           
                    </Colaborador>
                )}
        </section>
    )
}

export default Time;
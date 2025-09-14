import './Time.css';
import Colaborador from '../Colaborador';

const Time = (props) => {
    
    const css = {backgroundColor: props.corSecundaria}    

    return (
        props.colaboradores.length > 0 ? 
        <section className='time' style={css}>
            <h3
                style={{
                    borderColor: props.corPrimaria,
                    color: props.corNome
                }}
            >
            {props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(
                    colaborador => <Colaborador
                        key={colaborador.nome} // ou use colaborador.id se existir
                        corDeFundo={props.corPrimaria}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem} >
                    </Colaborador>
                )}
            </div>              
        </section>
        : ''
    )
}

export default Time;
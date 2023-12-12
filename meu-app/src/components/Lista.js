import { useState,useEffect } from 'react' 
import styles from './Lista.module.css'


function Lista({arr}){

    const [Iten , setIten] = useState([])
    const [NewIten , setNewIten] = useState('')

    const handlelist = ((event) => {
        setNewIten(event.target.value)
    })

    useEffect((Iten) => {
        console.log(`Item adicionado ${Iten}`)
    },[Iten])


    const AdcNovosItens = () => {
        if(NewIten.trim() !== '' && NewIten !== Number){
            setIten([...Iten,NewIten])
            setNewIten('')
        }
    }

    const Del = (index) => {
        const ListaCopia = [...Iten]
        ListaCopia.splice(index,1)
        setIten(ListaCopia)
    }

    const Complete = (index) => {
        const ListaCopia = [...Iten]
        ListaCopia[index] = <del>{ListaCopia[index]}</del>
        setIten(ListaCopia)
    }


    const RenderizaçãoLista = Iten.map((item,index) => { 
        return <h2 key={index}>{item} <button onClick={() => Complete(index)} className={styles.botoes}>✅</button><button onClick={() => Del(index)} className={styles.botoes}>❌</button></h2>
    })


    return(
        <div className={styles.Respostas}>
            <div>
                <input type='text' value={NewIten} onChange={handlelist} className={styles.Input}></input>
                <button onClick={AdcNovosItens} className={styles.b}>Adicionar</button>
                <div className={styles.Renderizacao}>{RenderizaçãoLista}</div>
            </div>
        </div>
    )
}

export default Lista
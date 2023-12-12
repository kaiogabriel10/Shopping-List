import styles from './Header.module.css'

function Header(){
    return(
        <div>
            <h1 className={styles.Titulos} >
                Listas de Compras
            </h1>
            <p className={styles.Paragrafos}>
                Crie sua Lista de Compras
            </p>
        </div>
    )
}

export default Header
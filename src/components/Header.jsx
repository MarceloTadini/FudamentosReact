import styles from './Header.module.css' //ao utilizar css modules precisa ter um nome na importação

import igniteLogo from '../assets/ignite-logo.svg'

export function Header(){
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo do Ignite" />
        </header> 
    );
}
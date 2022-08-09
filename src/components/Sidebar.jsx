import style from './Sidebar.module.css'
import {PencilLine} from 'phosphor-react'

export function Sidebar(){
    return(
        <aside className={style.sidebar}>
            <img className={style.cover} src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=50" alt="" />
            
            <div className={style.profile}>
                <img className={style.avatar} src="https://github.com/MarceloTadini.png"/>

                <strong>Marcelo Tadini</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}
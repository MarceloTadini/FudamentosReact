import style from './Comment.module.css'
import {ThumbsUp, Trash} from 'phosphor-react'
import { Avatar } from './Avatar'

export function Comment(){
    return(
        <div className={style.comment}>
            <Avatar hasBorder={false} src="https://github.com/diego3g.png" />

            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                        <div className={style.authorAndTime}>
                            <strong>Marcelo Tadini</strong>
                            <time title="Publicado 10 de agosto as 11:56" dateTime='2022/08/10 11:56'>Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p>Muito bem Marcelo, parabéns!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
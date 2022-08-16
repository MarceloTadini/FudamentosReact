import style from './Comment.module.css'
import {ThumbsUp, Trash} from 'phosphor-react'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Comment({content, onDeleteComment}){

    const [counter, setCounter] = useState(0);

    function handleLikeComment(){
        setCounter(counter+1);
    }

    function handleDeleteComment(){
        onDeleteComment(content);
    }

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
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{counter}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
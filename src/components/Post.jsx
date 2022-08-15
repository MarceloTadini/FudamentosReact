import style from './Post.module.css'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR'

import {Comment} from './Comment'
import { Avatar } from './Avatar'
import { useState } from 'react'


export function Post({ author, publishedAt, content}){

    const [comments, setComments] = useState(['Post Legal!'])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormat = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publisheDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment(){
        event.preventDefault()

        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange(){
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete){
        const commentsWithoutDeletedOne = comments.filter( comment =>
            {
                return comment !== commentToDelete
        })

        setComments(commentsWithoutDeletedOne)
    }

    return(
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={style.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormat} dateTime={publishedAt.toISOString()}>{publisheDateRelativeToNow}</time>
            </header>

            <div className={style.content}>
                {content.map(line =>{
                    if(line.type === 'paragraph'){
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link'){
                        return <p key={line.content}><a href="">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={style.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                     name='comment' 
                     placeholder='Deixe um comentário'
                     value={newCommentText}
                     onChange={handleNewCommentChange}
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={style.commentList}>
                {comments.map(comment =>{
                    return <Comment key={comment} content={comment} onDeleteComment={deleteComment}/>
                })}
            </div>
        </article>
    )
}
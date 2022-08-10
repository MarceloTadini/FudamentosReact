import style from './Post.module.css'

export function Post(){
    return(
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <img className={style.avatar} src="https://github.com/MarceloTadini.png"/>
                    <div className={style.authorInfo}>
                        <strong>Marcelo Tadini</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="Publicado 10 de agosto as 11:56" dateTime='2022/08/10 11:56'>Publicado há 1h</time>
            </header>

            <div className={style.content}>
                <p>Fala Galera</p>
                <p>Acabei de subir mais um projeto no meu portifólio! É um projeto que fiz no Ignite, da Rocketseaat, porém com a trilha atualizada de 2022!</p>
                <p> <a href="#">github.com/MarceloTadini/Ignite</a></p>
                <p> 
                    <a href="">#novoProjeto</a>{' '}
                    <a href="">#ignite</a>{' '}
                    <a href="">#rocketseat</a>
                </p>
            </div>

            <form className={style.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe um comentário'/>
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
        </article>
    )
}
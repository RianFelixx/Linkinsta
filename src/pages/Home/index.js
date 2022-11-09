import './home.css'

export default function Home() {
    return (
        <div className='home-container'>
            <h1>Rian Felix</h1>
            <span>Veja meus Links 👇</span>

            <main className='links'>
                <section className='link-area'>
                    <a href='#'>
                        <p className='link-text'>Linkedin</p>
                    </a>
                </section>
                <section className='link-area'>
                    <a href='#'>
                        <p className='link-text'>Github</p>
                    </a>
                </section>
                <section className='link-area'>
                    <a href='#'>
                        <p className='link-text'>Projetos</p>
                    </a>
                </section>
            </main>
        </div>
    )
}

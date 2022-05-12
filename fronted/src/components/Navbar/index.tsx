//index.tsx porque a linguagem do projeto é typescript, se não seria index.jsx
//container é uma classe do boostrap vai delimitar a largura do conteudo
import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './style.css';

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/mayasaraiva">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/mayasaraiva</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
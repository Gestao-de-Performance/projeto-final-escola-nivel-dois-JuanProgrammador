<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Meu Portfólio</title>
        <meta name="description" content="Portfólio de Juan Rodrigues, gestor de TI E desenvolvedor front-end. Aqui você encontra meus projetos, habilidades e informações de contato.">
        <meta name="keywords" content="portfólio, desenvolvedor front-end, HTML, CSS, projetos web">
        <link rel="stylesheet" href="style.css">
   </head>

   <body>
        <header>
            <nav class="marginSite displayFlex">
                <div class="menu-hamburger">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
                <div class="displayFlex gapCabecalho">
                    <a href="#" class="logo">Juan Rodrigues</a>
                    <div class="displayFlex nav-menu gapCabecalhoBotoes marginResponsiva">
                        <a class="removeDecoration tamanhoBotaoCabecalho" href="#apresentacao">Apresentação</a>
                        <a class="removeDecoration tamanhoBotaoCabecalho" href="#habilidades">Habilidades</a>
                        <a class="removeDecoration tamanhoBotaoCabecalho" href="#projetos">Projetos</a>
                        <a class="removeDecoration tamanhoBotaoCabecalho" href="#contato">Contato</a>
                    </div>
                </div>
            </nav>
        </header>

        <main>

            <!--Início da Apresentação-->

            <section id="apresentacao" class="marginSite">
                <div class="apresentacao-container">
                    <img src="img/foto-site.png" alt="Sua Foto" class="foto-perfil">
                    <div class="apresentacao-texto">
                        <h2>Olá, eu sou Juan Rodrigues</h2>
                        <p>Atualmente, estudo Gestão de TI e tenho me aprofundado em programas de desenvolvimento, buscando integrar esses conhecimentos com minha paixão pela área bancária. Meu objetivo é desenvolver soluções tecnológicas que otimizem processos e melhorem a experiência do usuário nesse setor.</p>
                        <a href="#contato" class="botao">Entre em contato</a>
                    </div>
                </div>
            </section>

            <!--Fim da Apresentação-->

            <!--Início das Habilidades-->

          <section id="habilidades" class="habilidades-secao">
              <div class="habilidades-container marginSite">
                 <h3 class="habilidades-titulo corTextoBranco">Minhas Habilidades</h3>
                 <div class="habilidades-lista">
                        <div class="habilidade-item">
                            <p class="habilidade-categoria corTextoBranco">Desenvolvimento</p>
                            <p class="habilidade-nome corTextoBranco">HTML</p>
                        </div>
                        <div class="habilidade-item">
                            <p class="habilidade-categoria corTextoBranco">Desenvolvimento</p>
                            <p class="habilidade-nome corTextoBranco">CSS</p>
                        </div>
                       <div class="habilidade-item">
                           <p class="habilidade-categoria corTextoBranco">Vendas e Atendimento</p>
                           <p class="habilidade-nome corTextoBranco">Atendimento ao Cliente (Presencial e Online)</p>
                       </div>
                       <div class="habilidade-item">
                           <p class="habilidade-categoria corTextoBranco">Vendas e Atendimento</p>
                           <p class="habilidade-nome corTextoBranco">Experiência com E-commerce</p>
                       </div>
                       <div class="habilidade-item">
                            <p class="habilidade-categoria corTextoBranco">Gestão de TI</p>
                            <p class="habilidade-nome corTextoBranco">Conhecimento de Produtos Bancários</p>
                       </div>
                       <div class="habilidade-item">
                            <p class="habilidade-categoria corTextoBranco">Gestão de TI</p>
                            <p class="habilidade-nome corTextoBranco">Análise de Dados Financeiros</p>
                        </div>
                   </div>
               </div>
           </section>
            <!--Fim das Habilidades*-->

            <!--Início dos Projetos-->

            <section id="projetos" class="marginSite">
                <div class="projeto-item">
                    <h3>Site da Faculdade (Projeto de Aula)</h3>
                    <p>Desenvolvimento de um site institucional para uma faculdade digital, utilizando HTML e CSS. Este projeto foi desenvolvido como parte do curso Escola de Programadores.</p>
                    <a href="https://github.com/JuanProgrammador/site-desenvolvido-em-aula-JuanRodri" class="botao-ver-projeto">Ver Código</a>
                    <a href="file:///C:/Users/vania/aula-programacao/meu-portfolio-projeto-final/index.html" class="botao-ver-projeto" target="_blank">Ver site</a>
                </div>
            </section>

            <!--Fim dos Projetos-->

        </main>
        <footer id="contato">
            <div class="rodape-container marginSite">
                <div class="rodape-info">
                    <h3 class="rodape-titulo">Contato</h3>
                    <p class="rodape-texto">Você pode entrar em contato comigo através dos seguintes meios:</p>
                    <ul class="rodape-lista-contato">
                        <li class="rodape-item-contato">
                           <img src="img/10507049.png" alt="Email">
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=juanrodriguesdeandrade@gmail.com"class="removeDecoration" target="_blank"> juanrodriguesdeandrade@gmail.com </a>
                        </li>
                        <li class="rodape-item-contato">
                            <img src="img/linkedin_3536569.png" class="removeDecoration" alt="LinkedIn">
                            <a href="https://www.linkedin.com/feed/?trk=onboarding-landing" class="removeDecoration">LinkedIn</a>
                        </li>
                        <li class="rodape-item-contato">
                           <img src="img/logotipo-do-github.png" class="removeDecoration" alt="GitHub">
                           <a href="https://github.com/JuanProgrammador" class="removeDecoration">GitHub</a>
                        </li>
                    </ul>
               </div>
                <div class="rodape-redes-sociais">
                    <h3 class="rodape-titulo">Redes Sociais</h3>
                    <div class="rodape-icones">
                        <a href="#"><img src="img/facebook_2168281.png" alt="Facebook"></a>
                        <a href="#"><img src="img/instagram_4494468.png" alt="Instagram"></a>
                        <a href="#"><img src="img/twitter_5968830.png" alt="Twitter"></a>
                    </div>
                </div>
            </div>
            <div class="rodape-direitos autorais">
                <p>&copy; 2024 Juan Rodrigues. Todos os direitos reservados.</p>
            </div>
        </footer>
        <script src="script.js"></script>
   </body>
</html>
document.addEventListener("DOMContentLoaded", function(){
    const menuHamburger = document.querySelector(".menu-hamburger");
    const navMenu = document.querySelector(".nav-menu");

    menuHamburger.addEventListener("click", () => {
        menuHamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });     

    // Seleciona todos os links internos do menu
    const navLinks = navMenu.querySelectorAll("a[href^='#']");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            // Executando no mobile e tablet
            if(window.innerWidth <= 1024) {
                const target = document.querySelector(link.getAttribute("href"));
                if(target) {
                    // Previne o pulo seco
                    e.preventDefault();
                    target.scrollIntoView({behavior: "smooth", block: "start"});

                    // Fecha o menu
                    menuHamburger.classList.remove("active");
                    navMenu.classList.remove("active");
                }
            }
        });
    });
});

// adiciona suporte para tecladono Menu Hamburguer
menuHamburger.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleMenu();
    }
});

//Função para alternar o estado do menu
menuHamburger.setAttribute("aria-expanded", String(isActive));

// Verifica o tamanho da tela e fecha o menu se necessário
window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
        menuHamburger.classList.remove("active");
        navMenu.classList.remove("active");
        menuHamburger.setAttribute("aria-expanded", "false");
    }
});

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

:root {
    --cor-hover-texto:  #1f6ae3;
    --cor-primaria-fonte: #0a1c7d;
    --cor-branco-fonte: #FFFFFF; 
    --cor-background-cursos:#051ebf;
    --cor-background-botao: #2d3dc6;
    --cor-background-rodape: #5e60f3;
    --cor-texto-categoria: #CC7F0B;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box; /* Garante que padding e border não aumentem o tamanho do elemento */
}

body {
    font-family: 'Montserrat', sans-serif;
    color: var(--cor-primaria-fonte); /* Cor padrão do texto no body */
}

h1, h2, p {
    font-weight: 400;
}

.marginSite {
    margin: 5% 20%;
}

.logo{
    color: var(--cor-background-cursos);
}

.tamanhoBotaoCabecalho{
    color: var(--cor-background-cursos);
}
/* Início Cabeçalho */
header {
    width: 100%;
}

header nav { /* Aumentando a especificidade */
    margin-top: 25px;
    position: relative;
}

.displayFlex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.gapCabecalho {
    gap: 20%;
}

.gapCabecalhoBotoes {
    gap: 15%;
}

.removeDecoration {
    text-decoration: none;
}

.quebradeLinha {
    white-space: nowrap;
}

/* Fim Cabeçalho */

/*Início Menu Hamburger*/
.menu-hamburger{
    display: none; /*Começa escondido*/
    cursor: pointer;
}

.menu-hamburger .bar{
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    -webkit-transition:all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: var(--cor-primaria-fonte)
    ;
}

/*Início Apresentação*/

#apresentacao .apresentacao-container {
    display: flex;
    align-items: center;
    gap: 20px; /* Espaçamento entre a imagem e o texto */
}

#apresentacao .foto-perfil {
    width: 200px; /* Ajuste o tamanho conforme necessário */
    height: auto;
    border-radius: 50%; /* Para torná-la redonda */
}

#apresentacao .apresentacao-texto {
    flex: 1; /* Ocupa o espaço restante */
}

#apresentacao h2 {
    font-size: 2em; /* Tamanho do título */
    margin-bottom: 10px;
}

#apresentacao p {
    font-size: 1.1em;
    line-height: 1.6; /* Espaçamento entre linhas */
}

#apresentacao .botao {
    display: inline-block;
    padding: 10px 20px;
    background-color: var(--cor-background-botao);
    color: var(--cor-branco-fonte);
    text-decoration: none;
    border-radius: 5px;
    margin-top: 20px;
}

#apresentacao .botao:hover {
    background-color: var(--cor-background-cursos); /* Cor mais escura no hover */
}

/*Fim Apresentação*/

/*Início Habilidades*/

#habilidades {
    background-color: var(--cor-background-cursos);
    padding: 50px 0; /* Espaçamento vertical */
}

#habilidades .habilidades-container {
    max-width: 1200px;
    margin: 0 auto;
}

#habilidades .habilidades-titulo {
    font-size: 2.5em;
    text-align: center;
    color: var(--cor-branco-fonte);
    margin-bottom: 40px;
}

#habilidades .habilidades-lista {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Layout responsivo em grid */
    gap: 20px;
}

#habilidades .habilidade-item {
    background-color: rgba(255, 255, 255, 0.1); /* Fundo levemente transparente */
    padding: 20px;
    border-radius: 5px;
}

#habilidades .habilidade-categoria {
    font-size: 1em;
    color: var(--cor-branco-fonte);
    opacity: 0.8;
    margin-bottom: 5px;
}

#habilidades .habilidade-nome {
    font-size: 1.2em;
    color: var(--cor-branco-fonte);
}

/*Fim Habilidades*/

/*Início Projetos*/

#projetos {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
}

#projetos .projeto-item {
    max-width: 800px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
    background-color: #fff;
}

#projetos .projeto-item img {
    width: 100%;
    height: auto;
    display: block;
}

#projetos .projeto-item h3 {
    font-size: 1.8em;
    margin: 20px 0;
}

#projetos .projeto-item p {
    font-size: 1.1em;
    line-height: 1.6;
    margin-bottom: 20px;
    padding: 0 20px;
}

#projetos .projeto-item .botao-ver-projeto {
    display: inline-block;
    padding: 10px 20px;
    background-color: var(--cor-background-botao);
    color: var(--cor-branco-fonte);
    text-decoration: none;
    border-radius: 5px;
    margin: 10px;
}

#projetos .projeto-item .botao-ver-projeto:hover {
    background-color: var(--cor-background-botao);
}

/*Fim Projetos*/

/*Início Rodapé*/

footer {
    background-color: var(--cor-background-rodape);
    padding: 30px 0;
}

footer .rodape-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

footer .rodape-info {
    flex: 1;
}

footer .rodape-titulo {
    font-size: 1.5em;
    margin-bottom: 15px;
}

footer .rodape-texto {
    font-size: 1em;
    line-height: 1.6;
    margin-bottom: 20px;
}

footer .rodape-lista-contato {
    list-style: none;
    padding: 0;
}

footer .rodape-item-contato {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

footer .rodape-item-contato img {
    margin-right: 10px;
    width: 24px; /* Ajuste o tamanho dos ícones */
    height: 24px;
}

footer .rodape-redes-sociais {
    flex: 1;
    text-align: right;
}

footer .rodape-icones a {
    display: inline-block;
    margin-left: 10px;
}

footer .rodape-icones img {
    width: 32px; /* Ajuste o tamanho dos ícones */
    height: 32px;
}

footer .rodape-direitos {
    margin-top: 2em;
    padding-top: 1em;
    border-top: 1px solid #ccc;
    font-size: 0.8em;
    color: #666;
    text-align: center;
}
/* Força os links do rodapé a ficarem azul */
footer a {
    color: var(--cor-primaria-fonte);
}

footer a:visited {
    color: var(--cor-primaria-fonte);
}

/*Fim Rodapé*/

/*Tablet*/
@media screen and (max-width: 1024px) {
    .marginSite {
        margin: 5%;
    }

    .displayFlex {
        flex-wrap: wrap;
    }

    .marginResponsiva {
        margin: 5% 0;
    } 

    .tamanhoBotaoCabecalho {
        width: 70px;
        height: auto;
        text-align: center;
    }

    .marginBotaoCabecalho {
        margin: 10% 0; 
    }

    .menu-hamburger{
        display: block; /* Exibe o menu hamburguer no tablet */;
    }

    .nav-menu{
        display: none; /* Esconde o menu de navegação no tablet */
        flex-direction: column;
        width: 100%;
        text-align: center;
        position: absolute;
        top: 100%;
        left: 0;
        background-color: #FFFFFF; /* Fundo branco para o menu */
        padding: 10px 0;
        z-index: 10;
    }

    .nav-menu.active{
        display: flex; /* Mostra o menu quando estiver ativo */
    }

    .nav-menu a{
        display: block; /* Transforma o link em bloco */
        padding: 10px 1rem; /*Um espaço maior de toque*/
        color:var(--cor-primaria-fonte);
        text-decoration: none;
        font-size: 1.2em; /*Tamanho do texto do menu*/
    }

    #apresentacao .apresentacao-container {
        flex-direction: column;
        text-align: center;
    }

    #apresentacao .foto-perfil {
        margin-bottom: 20px;
    }

    #habilidades .habilidades-titulo {
        font-size: 2em;
    }

    #projetos .projeto-item {
        max-width: 90%;
    }

    footer .rodape-container {
        flex-direction: column;
        text-align: center;
    }

    footer .rodape-info,
    footer .rodape-redes-sociais {
        text-align: center;
        margin-bottom: 20px;
    }
}

/*Mobile*/
@media screen and (max-width: 767px) {
    h1 {
        font-size: 1.1rem;
    }

    #apresentacao h2 {
        font-size: 1.8em;
    }

    #apresentacao p {
        font-size: 1em;
    }

    #habilidades .habilidades-titulo {
        font-size: 1.8em;
    }

    #projetos .projeto-item h3 {
        font-size: 1.5em;
    }

    footer .rodape-titulo {
        font-size: 1.2em;
    }
}

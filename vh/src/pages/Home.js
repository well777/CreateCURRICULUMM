

function Home() {
  return (
    <div className="Home">
     <div className="App-header">

</div>
<header>
    <div class="content">
        <div class="logo">
            <h3>Create curriculum </h3>
            <h2> Faça seu curriculo com mais praticidade </h2>
        </div>
    </div>
    <div>
        <ul class="list-menu">
            <li><a href='./App.js'>Home</a></li>
            <li><a href='#sobreNós'>Sobre nós</a></li>
            <li><a href='./pages/Profile.js'>Perfil</a></li>
            <li><a href='#contatos'>Contatos</a></li>
            <li><a href='#contatos'><i class="fab fa-instagram"></i></a></li>
            <li><a href='#contatos'><i class="fab fa-facebook-f"></i></a></li>
            <li><a href='#contatos'><i class="fas fa-shopping-cart"></i></a></li>

        </ul>

    </div>
    <div class="menu-toggle">
        <div class="one"></div>
        <div class="two"></div>
        <div class="three"></div>
    </div>

</header>
<section class="first-section" id="home">

    <div class="conteudo-principal">
        <h1> Crie seu curriculo seu dia na melhor plataforma do momento!!!</h1>
        <h2> Faça testes gamificados </h2>
        <div class="btn">
            <button class="reservar">Cria Curriculo!</button>
            <button class="montar">Faça provas Gamificadas!</button>
        </div>
    </div>
</section>

    </div>
  );
}

export default Home;

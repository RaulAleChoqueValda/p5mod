<template>
  <div id="app">

    <b-card title="Card Title" no-body >
      <b-card-header header-tag="nav" >
        <h1 class="center titulo" color="blue ">Implementacion de los Diagramas de Flujo</h1>
        <b-nav card-header tabs bg-variant="primary">
          <b-nav-item class="texto" to="/lanzamiento_dados" exact exact-active-class="active" >Lanzamiento de Dados</b-nav-item>
          <b-nav-item class="texto" to="/compra_articulos" exact exact-active-class="active">Compra de Articulos</b-nav-item>
          <b-nav-item class="texto" to="/gallina_ponedora" exact exact-active-class="active">Gallina ponedora</b-nav-item>
          <b-nav-item class="texto" to="/agencia_azucar" exact exact-active-class="active">Agencia de Azucar</b-nav-item>
          <b-nav-item class="texto" to="/interes_basico" exact exact-active-class="active">Interes Basico</b-nav-item>
         </b-nav>
      </b-card-header>

      <b-card-body>
        <router-view></router-view>
      </b-card-body>
    </b-card>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Courgette&family=Gwendolyn:wght@700&display=swap');

.titulo{
  font-family: 'Courgette', cursive;
  font-weight: bold;
  color: rgb(76, 76, 126);
}

.texto{
  font-family: 'Courgette', cursive;
  font-weight: bold;
  color: rgb(76, 76, 126);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

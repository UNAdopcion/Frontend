<template>
  <div class="LoggedHeader">
    <!--Header-->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="principal">
        <img src="@/assets/UNAdopcion.svg" alt="Logo UNadopcion" height="40" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-md-auto">
          <li class="nav-item" id="btnPrincipal">
            <a
              class="nav-link"
              v-bind:href="/inicio/ + this.$store.getters.getGoogleId"
              >Inicio</a
            >
          </li>
          <li class="nav-item" id="btnRegisPet">
            <a class="nav-link" href="/registro-mascota">Registrar mascota</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/buscar-mascota">Buscar Mascota</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/mostrar-mascota">Mostar Mascota</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/consultar-mascota">Consultar Mascota</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/solicitud">Solicitudes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/denuncia">Denunciar</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/consultar-maltrato">Consultar Maltrato</a>
          <li class="nav-item">
            <a class="nav-link" href="/cuidados">Cuidados</a>
          <li class="nav-item">
            <a class="nav-link" href="/contacto">Contacto</a>
</li>
          <li class="nav-item">
            <a class="nav-link" href="/registro-veterinaria">Registro Veterinaria</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/consultar-veterinaria">Consulta Veterinaria</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/buscar-veterinaria">Buscar Veterinaria</a>
          </li>

        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "LoggedHeader",
  props: {
    nombre: String,
  },
};
</script>


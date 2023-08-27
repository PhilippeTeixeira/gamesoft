<template>
  <div class="background-image m-0 p-0">
    <HeaderComponent />
    <div class="container">
      <div class="row justify-content-center bg-dark bg-opacity-75 p-4">
        <h1 class="text-center">Liste des jeux</h1>
      </div>
      <div class="row justify-content-center bg-dark bg-opacity-75 p-4">
        <div class="container m-2">
          <div class="row justify-content-center">
            <div class="col-4">
              <div class="input-group mb-3">
                <form class="form-inline d-flex">
                  <input class="form-control me-2" type="search" placeholder="Rechechez un jeu" aria-label="Search">
                  <button class="btn btn-outline-light" type="submit">Recherche</button>
                </form>
              </div>
            </div>
            <div class="col-4">
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" value="" id="status" name="status">
                <label class="form-check-label" for="status">Afficher uniquement les jeux disponibles </label>
              </div>
            </div>
            <div class="col-2">
              <div class="d-flex justify-content-end mb-3">
                <button id="morecrit" class="btn btn-outline-light" data-bs-toggle="collapse" @click="moreOrLess()"
                  data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" type="button">+ de
                  critères</button>
              </div>
            </div>
          </div>
          <div class="accordion accordion-flush" id="morecrit">
            <div id="collapseOne" class="accordion-collapse collapse collapse" aria-labelledby="headingOne"
              data-bs-parent="#morecrit">
              <div class="row justify-content-center">
                <div class="col-5">
                  <div class="input-group mb-3 col-3">
                    <label class="input-group-text" for="inputGroupSelect01">Type de jeu</label>
                    <select class="form-select" id="inputGroupSelect01">
                      <option selected>Choisissez...</option>
                      <option value="1">RPG</option>
                      <option value="2">MMORPG</option>
                      <option value="3">Aventure</option>
                    </select>
                  </div>
                </div>
                <div class="col-5">
                  <div class="input-group mb-3 col-3">
                    <label class="input-group-text" for="inputGroupSelect02">À partir de...</label>
                    <select class="form-select" id="inputGroupSelect02">
                      <option selected>Choisissez...</option>
                      <option value="1">2025</option>
                      <option value="2">2024</option>
                      <option value="3">2023</option>
                      <option value="4">2022</option>
                      <option value="5">2021</option>
                      <option value="6">2020</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center bg-dark bg-opacity-75 p-4">
        <GameElement v-for="element in elements" :key="element.name" :title="element.title"
          :description="element.description" :status="element.status" />
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import GameElement from "../components/GameElement.vue";
import GameService from '../services/game.service'

export default {
  beforeCreate: function () {
    document.body.className = "homebody";
  },
  name: "GamesPage",
  components: {
    HeaderComponent,
    GameElement,
    FooterComponent,
  },
  data() {
    return {
      elements: []
    }
  },
  methods: {
    getGamesList() {
      GameService.getGamesList().then(response => {
        for (let element of response.data.games) {
          if (element.status == "En production") { element.status = "Disponible" }
          this.elements.push({ title: element.title, description: element.description, status: element.status })
          console.log(this.elements)
        }
      })
        .catch(err => {
          console.log(err)
        })
    },
    refreshGamesList() {
      this.elements = []
      this.getGamesList()
    },
    moreOrLess() {
      if(document.getElementById("morecrit").textContent == "+ de critères"){
        console.log("je rendre dans la condition")
        document.getElementById("morecrit").innerHTML = "- de critères"
      }
      else {
        document.getElementById("morecrit").innerHTML = "+ de critères"
      }
    }
  },
  mounted() {
    this.getGamesList()

  }
};
</script>

<style>
.background-image {
  background-image: url('../assets/background_wallpaper.jpg');
  background-attachment: fixed;
}
</style>
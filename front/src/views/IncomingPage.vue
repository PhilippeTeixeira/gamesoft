<template>
  <div class="background-image m-0 p-0">
    <HeaderComponent />
    <div class="container">
      <div class="row justify-content-center bg-dark bg-opacity-75 p-4">
        <GameElement v-for="element in elements" :key="element.name" :title="element.title"
          :description="element.description" />
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
  name: "IncomingPage",
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
      GameService.getIncomingGamesList().then(response => {
        for (let element of response.data.games) {
          this.elements.push({ title: element.title, description: element.description })
          //console.log(this.elements)
        }
      })
        .catch(err => {
          console.log(err)
        })
    },
    refreshGamesList() {
      this.elements = []
      this.getGamesList()
    }
  },
  mounted() {
    this.getGamesList()

  }
};
</script>
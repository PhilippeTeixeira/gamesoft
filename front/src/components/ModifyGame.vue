<template>
  <div class="d-flex justify-content-center">
    <Form
      id="modifygameform"
      class="bg-light text-dark col-10 col-md-8 p-4 rounded"
      name="form"
      @submit="modifyGame"
      :validation-schema="schema"
    >
      <h2 class="text-center mb-4">Modifier un jeu</h2>
      <div class="form-group mb-4">
        <div class="bg-dark text-white text-center m-auto card p-2">
          <h2>{{ title }}</h2>
        </div>
      </div>
      <div class="form-group mb-4">
        <label for="description">Description :</label>
        <Field
          name="description"
          id="descriptionInput"
          type="text"
          class="form-control"
          v-model="description"
        />
        <ErrorMessage name="description" class="text-danger" />
      </div>
      <div class="form-group mb-4">
        <label for="plateforms">Plateforme (PC et/ou Xboite) :</label>
        <Field
          name="plateforms"
          id="plateformsInput"
          type="text"
          class="form-control"
          v-model="plateforms"
        />
        <ErrorMessage name="plateforms" class="text-danger" />
      </div>
      <div class="form-group mb-4">
        <label for="priority">Priorité de développement :</label>
        <Field
          name="priority"
          id="priorityInput"
          type="number"
          class="form-control"
          v-model="priority"
        />
        <ErrorMessage name="priority" class="text-danger" />
      </div>
      <div class="form-group mb-4">
        <label for="gameEngine"
          >Moteur du jeu (Unreal Engine, Unity ou CryEngine) :</label
        >
        <Field
          name="gameEngine"
          id="gameEngineInput"
          type="text"
          class="form-control"
          v-model="gameEngine"
        />
        <ErrorMessage name="gameEngine" class="text-danger" />
      </div>
      <div class="form-group mb-4">
        <label for="releaseDate">Date de sortie estimée du jeu :</label>
        <Field
          name="releaseDate"
          id="releaseDateInput"
          type="date"
          class="form-control"
          v-model="releaseDate"
        />
        <ErrorMessage name="releaseDate" class="text-danger" />
      </div>
      <div class="form-group mb-4">
        <label for="budget">Budget alloué au jeu (en €) :</label>
        <Field
          name="budget"
          id="budgetInput"
          type="number"
          class="form-control"
          v-model="budget"
        />
        <ErrorMessage name="budget" class="text-danger" />
      </div>
      <div class="form-group mb-4">
        <label for="status">Statut du jeu (en production ou en développement) :</label>
        <Field
          name="status"
          id="statusInput"
          type="text"
          class="form-control"
          v-model="status"
        />
        <ErrorMessage name="status" class="text-danger" />
      </div>
      <div class="form-group mb-4">
        <label for="typeOfGame">Type de jeu (RPG, MMO, Aventure...) :</label>
        <Field
          name="typeOfGame"
          id="typeOfGameInput"
          type="text"
          class="form-control"
          v-model="typeOfGame"
        />
        <ErrorMessage name="typeOfGame" class="text-danger" />
      </div>
      <div class="form-group mb-4">
        <label for="numberOfPlayers">Nombre de joueurs :</label>
        <Field
          name="numberOfPlayers"
          id="numberOfPlayersInput"
          type="text"
          class="form-control"
          v-model="numberOfPlayers"
        />
        <ErrorMessage name="numberOfPlayers" class="text-danger" />
      </div>
      <div class="d-flex justify-content-center mb-4">
        <button class="btn btn-outline-dark m-2" :disabled="loading" type="submit">
          <span v-show="loading" class="spinner-border spinner-border-sm"></span>
          Enregistrer les modifications
        </button>
        <router-link to="/account"
          ><button class="btn btn-danger m-2">Annuler</button></router-link
        >
      </div>
    </Form>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import GameService from "../services/game.service";
import * as yup from "yup";

export default {
  name: "ModifyGame",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },

  data() {
    const schema = yup.object().shape({
      title: yup.string().required("Veuillez entrer un titre !"),
      description: yup.string().required("Veuillez remplir ce champ !"),
      plateforms: yup.string().required("Veuillez remplir ce champ !"),
      priority: yup.number().required("Veuillez remplir ce champ !"),
      gameEngine: yup.string().required("Veuillez remplir ce champ !"),
      releaseDate: yup.string().required("Veuillez remplir ce champ !"),
      budget: yup.number().required("Veuillez remplir ce champ !"),
      status: yup.string().required("Veuillez remplir ce champ !"),
      typeOfGame: yup.string().required("Veuillez remplir ce champ !"),
      numberOfPlayers: yup.string().required("Veuillez remplir ce champ !"),
    })
    return {
      submitted: false,
      successful: false,
      message: "",
      loading: false,
      description: this.description,
      plateforms: this.plateforms,
      priority: this.priority,
      gameEngine: this.gameEngine,
      releaseDate: this.releaseDate,
      budget: this.budget,
      status: this.status,
      typeOfGame: this.typeOfGame,
      numberOfPlayers: this.numberOfPlayers,
      schema,
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/signin");
    }
  },
  created() {
    this.getGameData(this.title);
  },
  methods: {
    getGameData(title) {
      console.log("le titre du jeu recherché est : " + title);
      GameService.getGameData(title)
        .then((response) => {
          console.log(title);
          console.log(response.data.data.description);
          console.log(response);
          this.description = response.data.data.description;
          this.plateforms = response.data.data.plateforms;
          this.priority = response.data.data.priority;
          this.gameEngine = response.data.data.gameEngine;
          this.releaseDate = response.data.data.releaseDate;
          this.budget = response.data.data.budget;
          this.status = response.data.data.status;
          this.typeOfGame = response.data.data.typeOfGame;
          this.numberOfPlayers = response.data.data.numberOfPlayers;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    modifyGame(title) {
      console.log("je suis la fonction modifyGame et je suis déclenché !")
      this.message = ""
      this.successful = false
      this.loading = true
      GameService.modifyGame(title).then(
        (data) => {
          this.submitted = true;
          this.successful = true;
          this.loading = false;
          this.message = data.message;
          this.description = data.description;
          this.studioName = "Gamesoft";
          this.plateforms = data.plateforms;
          this.priority = data.priority;
          this.gameEngine = data.gameEngine;
          this.budget = data.budget;
          this.status = data.status;
          this.typeOfGame = data.typeOfGame;
          this.numberOfPlayers = data.numberOfPlayers;
          setTimeout(() => {
            this.message = "";
          }, 5000);
        },
        (error) => {
          this.message =
            (error.response && error.response.data) || error.message || error.toString();
          this.successful = false;
          this.loading = false;
          const form = document.getElementById("addgameform");
          HTMLFormElement.prototype.reset.call(form);
          setTimeout(() => {
            this.message = "";
          }, 5000);
        }
      );
    },
  },
};
</script>

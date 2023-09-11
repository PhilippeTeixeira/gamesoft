<template>
  <div class="d-flex justify-content-center">
    <div
      id="modifygameform"
      class="bg-light text-dark col-10 col-md-8 p-4 rounded"
      name="form"
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
        <div v-if="!modifyDescription" class="card">
          <div class="p-2 d-flex justify-content-between">
            <div>{{ description }}</div>
            <button v-if="!focusField" class="btn btn-warning" @click="modifyDescription = true ; focusField = true">
              Modifier
            </button>
          </div>
        </div>
        <Form v-if="modifyDescription">
          <div class="d-flex">
            <Field
              name="description"
              id="descriptionInput"
              type="text"
              class="form-control bg-warning"
              v-model="description"
            /><button class="btn btn-success ms-2">Valider</button>
          </div>
          <ErrorMessage name="description" class="text-danger" />
        </Form>
      </div>
      <div class="form-group mb-4">
        <label for="plateforms">Plateforme (PC et/ou Xboite) :</label>
        <div v-if="!modifyPlateforms" class="card">
          <div class="p-2 d-flex justify-content-between">
            <div>{{ plateforms }}</div>
            <button v-if="!focusField" class="btn btn-warning" @click="modifyPlateforms = true ; focusField = true">
              Modifier
            </button>
          </div>
        </div>
        <Form v-if="modifyPlateforms">
          <div class="d-flex">
            <Field
              name="plateforms"
              id="plateformsInput"
              type="text"
              class="form-control bg-warning"
              v-model="plateforms"
            /><button class="btn btn-success ms-2">Valider</button>
          </div>
          <ErrorMessage name="plateforms" class="text-danger" />
        </Form>
      </div>
      <div class="form-group mb-4">
        <label for="priority">Priorité de développement :</label>
        <div v-if="!modifyPriority" class="card">
          <div class="p-2 d-flex justify-content-between">
            <div>{{ priority }}</div>
            <button v-if="!focusField" class="btn btn-warning" @click="modifyPriority=true; focusField = true">Modifier</button>
          </div>
        </div>
        <Form v-if="modifyPriority">
          <div class="d-flex">
            <Field
              name="priority"
              id="priorityInput"
              type="number"
              class="form-control bg-warning"
              v-model="priority"
            /><button class="btn btn-success ms-2">Valider</button>
          </div>
          <ErrorMessage name="priority" class="text-danger" />
        </Form>
      </div>
      <div class="form-group mb-4">
        <label for="gameEngine">Moteur du jeu (Unreal Engine, Unity ou CryEngine) :</label>
        <div v-if="!modifyGameEngine" class="card">
          <div class="p-2 d-flex justify-content-between">
            <div>{{ gameEngine }}</div>
            <button v-if="!focusField" class="btn btn-warning" @click="modifyGameEngine=true; focusField = true">Modifier</button>
          </div>
        </div>
        <Form v-if="modifyGameEngine">
          <div class="d-flex">
            <Field
              name="gameEngine"
              id="gameEngineInput"
              type="text"
              class="form-control bg-warning"
              v-model="gameEngine"
            /><button class="btn btn-success ms-2">Valider</button>
          </div>
          <ErrorMessage name="gameEngine" class="text-danger" />
        </Form>
      </div>
      <div class="form-group mb-4">
        <label for="releaseDate">Date de sortie estimée du jeu :</label>
        <div v-if="!modifyRealeaseDate" class="card">
          <div class="p-2 d-flex justify-content-between">
            <div>{{ releaseDate }}</div>
            <button v-if="!focusField" class="btn btn-warning" @click="modifyRealeaseDate=true; focusField = true">Modifier</button>
          </div>
        </div>
        <Form v-if="modifyRealeaseDate">
          <div class="d-flex">
            <Field
              name="releaseDate"
              id="releaseDateInput"
              type="date"
              class="form-control bg-warning"
              v-model="releaseDate"
            /><button class="btn btn-success ms-2">Valider</button>
          </div>
          <ErrorMessage name="releaseDate" class="text-danger" />
        </Form>
      </div>
      <div class="form-group mb-4">
        <label for="budget">Budget alloué au jeu (en €) :</label>
        <div v-if="!modifyBudget" class="card">
          <div class="p-2 d-flex justify-content-between">
            <div>{{ budget }}</div>
            <button v-if="!focusField" class="btn btn-warning" @click="modifyBudget=true; focusField = true">Modifier</button>
          </div>
        </div>
        <Form v-if="modifyBudget">
          <div class="d-flex">
            <Field
              name="budget"
              id="budgetInput"
              type="number"
              class="form-control bg-warning"
              v-model="budget"
            /><button class="btn btn-success ms-2">Valider</button>
          </div>
          <ErrorMessage name="budget" class="text-danger" />
        </Form>
      </div>
      <div class="form-group mb-4">
        <label for="status">Statut du jeu (en production ou en développement) :</label>
        <div v-if="!modifyStatus" class="card">
          <div class="p-2 d-flex justify-content-between">
            <div>{{ status }}</div>
            <button v-if="!focusField" class="btn btn-warning" @click="modifyStatus=true; focusField = true">Modifier</button>
          </div>
        </div>
        <Form v-if="modifyStatus">
          <div class="d-flex">
            <Field
              name="status"
              id="statusInput"
              type="text"
              class="form-control bg-warning"
              v-model="status"
            /><button class="btn btn-success ms-2">Valider</button>
          </div>
          <ErrorMessage name="status" class="text-danger" />
        </Form>
      </div>
      <div class="form-group mb-4">
        <label for="typeOfGame">Type de jeu (RPG, MMO, Aventure...) :</label>
        <div v-if="!modifyTypeOfGame" class="card">
          <div class="p-2 d-flex justify-content-between">
            <div>{{ typeOfGame }}</div>
            <button v-if="!focusField" class="btn btn-warning" @click="modifyTypeOfGame=true; focusField = true">Modifier</button>
          </div>
        </div>
        <Form v-if="modifyTypeOfGame">
          <div class="d-flex">
            <Field
              name="typeOfGame"
              id="typeOfGameInput"
              type="text"
              class="form-control bg-warning"
              v-model="typeOfGame"
            /><button class="btn btn-success ms-2">Valider</button>
          </div>
          <ErrorMessage name="typeOfGame" class="text-danger" />
        </Form>
      </div>
      <div class="form-group mb-4">
        <label for="numberOfPlayers">Nombre de joueurs :</label>
        <div v-if="!modifyNumberOfPlayers" class="card">
          <div class="p-2 d-flex justify-content-between">
            <div>{{ numberOfPlayers }}</div>
            <button v-if="!focusField" class="btn btn-warning" @click="modifyNumberOfPlayers=true; focusField = true">Modifier</button>
          </div>
        </div>
        <Form v-if="modifyNumberOfPlayers">
          <div class="d-flex">
            <Field
              name="numberOfPlayers"
              id="numberOfPlayersInput"
              type="text"
              class="form-control bg-warning"
              v-model="numberOfPlayers"
            /><button class="btn btn-success ms-2" @click="modifyGame(numberOfPlayers)">Valider</button>
          </div>
          <ErrorMessage name="numberOfPlayers" class="text-danger" />
        </Form>
      </div>
      <div class="d-flex justify-content-center mb-4">
        <router-link to="/account">
          <button class="btn btn-outline-dark m-2">Revenir à la liste des jeux</button>
        </router-link>
      </div>
    </div>
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
    });
    return {
      submitted: false,
      successful: false,
      message: "",
      loading: false,

      focusField: false,

      modifyDescription: false,
      modifyPlateforms: false,
      modifyPriority: false,
      modifyGameEngine: false,
      modifyRealeaseDate: false,
      modifyBudget: false,
      modifyStatus: false,
      modifyTypeOfGame: false,
      modifyNumberOfPlayers: false,

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
    };
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
    modifyGame(title, modifData, dataName) {
      console.log("je suis la fonction modifyGame et je suis déclenché ! Et mon titre est : " + title + "mon nom de variable est : " + dataName);
      this.message = "";
      this.successful = false;
      this.loading = true;
      GameService.modifyGame(title, modifData, dataName).then(
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
          setTimeout(() => {
            this.message = "";
          }, 5000);
        }
      );
    },
  },
};
</script>

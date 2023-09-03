<template>
        <div class="d-flex justify-content-center">
            <Form id="addgameform" class="bg-light text-dark col-10 col-md-8 p-4 rounded" name="form" @submit="addGame"
                :validation-schema="schema">
                <h2 class="text-center mb-4">Modifier un jeu</h2>
                <div class="form-group mb-4">
                    <div class="bg-dark text-white text-center m-auto card p-2"><h2>{{ title }}</h2></div>
                </div>
                <div class="form-group mb-4">
                    <label for="description">Description :</label>
                    <Field name="description" id="descriptionInput" type="text" class="form-control"
                        placeholder="Description" />
                    <ErrorMessage name="description" class="text-danger" />
                </div>
                <div class="form-group mb-4">
                    <label for="plateforms">Plateforme (PC et/ou Xboite) :</label>
                    <Field name="plateforms" id="plateformsInput" type="text" class="form-control"
                        placeholder="Supports (Xboite et/ou PC)" />
                    <ErrorMessage name="plateforms" class="text-danger" />
                </div>
                <div class="form-group mb-4">
                    <label for="priority">Priorité de développement :</label>
                    <Field name="priority" id="priorityInput" type="number" class="form-control"
                        placeholder="Priorité de développement (1-5)" />
                    <ErrorMessage name="priority" class="text-danger" />
                </div>
                <div class="form-group mb-4">
                    <label for="gameEngine">Moteur du jeu (Unreal Engine, Unity ou CryEngine) :</label>
                    <Field name="gameEngine" id="gameEngineInput" type="text" class="form-control"
                        placeholder="Moteur du jeu (Unity, Unreal ou CryEngine)" />
                    <ErrorMessage name="gameEngine" class="text-danger" />
                </div>
                <div class="form-group mb-4">
                    <label for="releaseDate">Date de sortie estimée du jeu :</label>
                    <Field name="releaseDate" id="releaseDateInput" type="date" class="form-control"
                        placeholder="Date de sortie du jeu (estimée)" />
                    <ErrorMessage name="releaseDate" class="text-danger" />
                </div>
                <div class="form-group mb-4">
                    <label for="budget">Budget alloué au jeu (en €) :</label>
                    <Field name="budget" id="budgetInput" type="number" class="form-control" placeholder="Budget (en€)" />
                    <ErrorMessage name="budget" class="text-danger" />
                </div>
                <div class="form-group mb-4">
                    <label for="status">Statut du jeu (en production ou en développement) :</label>
                    <Field name="status" id="statusInput" type="text" class="form-control"
                        placeholder="Statut (en production ou en cours de développement)" />
                    <ErrorMessage name="status" class="text-danger" />
                </div>
                <div class="form-group mb-4">
                    <label for="typeOfGame">Type de jeu (RPG, MMO, Aventure...) :</label>
                    <Field name="typeOfGame" id="typeOfGameInput" type="text" class="form-control"
                        placeholder="Type de jeu (RPG, MMO, Aventure...)" />
                    <ErrorMessage name="typeOfGame" class="text-danger" />
                </div>
                <div class="form-group mb-4">
                    <label for="numberOfPlayers">Nombre de joueurs :</label>
                    <Field name="numberOfPlayers" id="numberOfPlayersInput" type="text" class="form-control"
                        placeholder="Nombre de joueurs" />
                    <ErrorMessage name="numberOfPlayers" class="text-danger" />
                </div>
                <div class="d-flex justify-content-center mb-4">
                    <router-link to="/account"><button class="btn btn-outline-dark m-2" :disabled="loading" type="submit">
                        <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                        Enregistrer les modifications
                    </button></router-link>
                    <router-link to="/account"><button class="btn btn-danger m-2">Annuler</button></router-link>
                </div>
            </Form>
        </div>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate'
//import GameService from '../services/game.service'
import * as yup from "yup";


export default {
    name: 'ModifyGame',
    components: {
        Form,
        Field,
        ErrorMessage
    },
    props: {
        title: {
            type: String,
            required: true
        }
    } 
        
    ,
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
            numberOfPlayers: yup.string().required("Veuillez remplir ce champ !")
        })
        return {
            submitted: false,
            successful: false,
            message: '',
            schema
        }
    },
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    mounted() {
        if (!this.currentUser) {
            this.$router.push('/signin');
        }
    },
    methods: {

    }
};
</script>
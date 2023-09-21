<template>
    <div class="container">
        <div class="row d-flex  mb-2 text-dark">
            <h2 class="text-center">Liste des jeux</h2>
            <div class="d-flex justify-content-end">
                <button id="btnAddGame" class="btn btn-outline-dark col-2" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Ajouter un jeu</button>
            </div>
        </div>

        <div class="accordion accordion-flush" id="addGame">
            <div class="accordion-item bg-transparent">
                <div id="collapseOne" class="accordion-collapse collapse collapse" aria-labelledby="headingOne"
                    data-bs-parent="#addGame">
                    <div class="accordion-body text-white p-0">
                        <div class="d-flex justify-content-center">
                            <Form id="addgameform" class="bg-light text-dark col-10 col-md-8 p-4 rounded" name="form"
                                @submit="addGame" :validation-schema="schema">
                                <h2 class="text-center mb-4">Ajouter un jeu</h2>
                                <div class="form-group mb-4">
                                    <label for="title">Nom du jeu :</label>
                                    <Field name="title" id="titleInput" type="text" class="form-control"
                                        placeholder="Titre" v-model="gameTitle" />
                                    <ErrorMessage name="title" class="text-danger" />
                                </div>

                                <div class="form-group mb-4">
                                    <label for="file">Choisissez une image pour ce jeu :</label>
                                    <input
                                    name="file"
                                    id="fileInput"
                                    type="file"
                                    class="form-control mb-2"
                                    accept="image/.jpg"
                                    ref="file"
                                    @change="selectFile()"
                                    />
                                    <ErrorMessage name="file" class="text-danger mb-2" />
                                    <div v-if="currentFile" class="progress">
                                        <div 
                                            class="progress-bar progress-bar-info"
                                            role="progressbar"
                                            :aria-valuenow="progress"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                            :style="{ width: progress + '%' }"
                                        >
                                            {{  progress }}%
                                        </div>
                                    </div>
                                    <button class="btn btn-success m-2" :disabled="!selectedFiles" @click="upload">
                                      Upload
                                    </button>
                                    <div v-if="message" class="alert alert-secondary mb-2" role="alert">
                                        {{  message }}
                                    </div> 
                                   <div v-if="previewImage == true" class="card">
                                        <p class="text-center mt-2">Apperçu des images pour ce jeu :</p>
                                        <div class="container">
                                            <div class="row justify-content-center bg-dark bg-opacity-75 p-2">
                                                <div 
                                                class="card p-2 col-3 m-2"
                                                v-for="(file, index) in fileInfos"
                                                :key="index"
                                                >
                                                    <p v-if="previewImage == false">Pas d'images pour ce jeu ! Veuillez en téléverser au moins une !</p>
                                                    <img :src="file.url" class="preview" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div> 

                                    <div class="card mt-3">
                                        <div class="card-header">Liste des images</div>
                                        <ul class="list-group list-group-flush">
                                            <p v-if="previewImage == false" class="text-center text-danger">Pas d'images pour ce jeu ! Veuillez en téléverser au moins une !</p>
                                            <li
                                                class="list-group-item"
                                                v-for="(file, index) in fileInfos"
                                                :key="index"
                                            >
                                            <a :href="file.url">{{ file.name }}</a>
                                            </li>
                                        </ul>
                                    </div>
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
                                    <Field name="budget" id="budgetInput" type="number" class="form-control"
                                        placeholder="Budget (en€)" />
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
                                    <button class="btn btn-outline-dark" :disabled="loading" type="submit"
                                        data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false"
                                        aria-controls="collapseOne">
                                        <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                                        Ajouter
                                    </button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container d-flex justify-content-center">
        <div class="row col-6 position-fixed">
            <div v-if="message" class="alert" :class="successful ? 'alert-success' : 'alert-danger'">
                {{ message }}
            </div>
        </div>
    </div>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate'
import GameService from '../services/game.service'
import * as yup from "yup";
import UploadService from "../services/UploadFilesService"


export default {
    name: 'AddGame',
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    data() {
        const schema = yup.object().shape({
            title: yup.string().required("Veuillez entrer un titre !"),
            image: yup.mixed().required("Veuillez ajouter une image pour ce jeu !"),
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
            gameTitle: "",
            submitted: false,
            successful: false,
            message: '',
            loading: false,
            schema,

            selectedFiles: undefined,
            currentFile: undefined,
            previewImage: false,
            counterFile: 1,

            progress: 0,

            fileInfos: [],
        }
    },
    computed: {
        currentUser() {
            return this.$store.state.auth.user
        }
    },
    mounted() {
        if (!this.currentUser) {
            this.$router.push('/signin')
        }
        UploadService.getFiles().then((response) => {
            this.fileInfos = response.data
            if (this.fileInfos.length > 0) {
                this.previewImage = true
            }
        })
    },
    methods: {

        addGame(game) {
            this.message = ''
            this.successful = false
            this.loading = true
            GameService.addGame(game).then(
                data => {
                    this.submitted = true
                    this.successful = true
                    this.loading = false
                    this.message = data.message
                    this.title = data.title
                    this.description = data.description
                    this.studioName = 'Gamesoft'
                    this.plateforms = data.plateforms
                    this.priority = data.priority
                    this.gameEngine = data.gameEngine
                    this.budget = data.budget
                    this.status = data.status
                    this.typeOfGame = data.typeOfGame
                    this.numberOfPlayers = data.numberOfPlayers

                    const form = document.getElementById("addgameform")
                    HTMLFormElement.prototype.reset.call(form)
                    this.$parent.refreshGamesList()
                    setTimeout(() => {
                        this.message = ''
                    }, 5000)
                },
                error => {
                    this.message =
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString()
                    this.successful = false
                    this.loading = false
                    const form = document.getElementById("addgameform")
                    HTMLFormElement.prototype.reset.call(form)
                    setTimeout(() => {
                        this.message = ''
                    }, 5000)
                }

            )
        },

        selectFile() {
            this.selectedFiles = this.$refs.file.files;
            console.log("hello je suis dans la fonction selectFile() et ma variable selectedFiles vaut : "+this.selectedFiles)
        },

        upload() {
            this.progress = 0;

            this.currentFile = this.selectedFiles.item(0)
            for (let file in this.selectedFiles) {
                console.log(`${file}: ${this.selectedFiles[file].name}`)
            }
            console.log(this.currentFile)
            if(this.gameTitle){
                UploadService.upload(this.currentFile, event => {
                    this.progress = Math.round((100 * event.loaded) / event.total);
                }, this.gameTitle, this.counterFile)
                    .then(response => {
                    this.message = response.data.message;
                    return UploadService.getFiles();
                    })
                    .then(files => {
                    this.fileInfos = files.data;
                    this.previewImage = true
                    this.counterFile += 1
                    })
                    .catch(() => {
                    this.progress = 0;
                    this.message = "Could not upload the file!";
                    this.currentFile = undefined;
                    });
            } else {
                this.message = "Veuillez d'abord entrer un titre avant de téléverser une image"
            }
        },
    }
};
</script>

<style>
   .uploading-image{
     display:flex;
     height: 75%;
     width: 75%;
   }
   .preview {
    width: 100%;
   }
 </style>
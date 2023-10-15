<template>
    <div v-if="message" class="container d-flex justify-content-center position-fixed message-response z-3 col-8">
        <div class="row">
          <div class="alert rounded d-flex justify-content-between align-items-center" :class="successful ? 'alert-success' : 'alert-danger'">
               <div class="align-self-center"><p class="fw-bold">{{ message }}</p></div>
               <div><button class="btn p-0 m-0" @click="message=false"><i class="bi bi-x fw-bold" style="font-size: 30px;"></i></button></div>
          </div>
        </div>
    </div>
    <div v-if="showPopperDelete" class="z-3 d-flex justify-content-center align-items-center position-fixed popper-delete vh-100 vw-100">
        <div class="container card h-auto w-25 col-6">
            <div class="row">
                <h2 class="text-center">ATTENTION</h2>
            </div>
            <div class="row p-2">
                <p>Etes-vous sur de vouloir supprimer le jeu <span class="text-danger">{{ title }}</span> de la base de données ?</p>
                <p class="text-danger text-center">/!\ CETTE ACTION EST IRREVERSIBLE /!\</p>
            </div>
            <div class="row d-flex ">
                <div class="d-flex justify-content-end">
                    <button class="btn btn-success m-2" @click="showPopperDelete=false; deleteGame(title)">Valider</button>
                    <button class="btn btn-danger m-2" @click="showPopperDelete=false">Annuler</button>
                </div>
            </div>
        </div>
    </div>
    <tr>
        <td>{{ title }}</td>
        <td>{{ releaseDate }}</td>
        <td>{{ score }}</td>
        <td><router-link :to="{ name: 'ModifyGamePage', params: { title: title } }"><button class="btn btn-warning" type="button">Modifier</button></router-link></td>
        <td><button class="btn btn-danger" type="button" @click="showPopperDelete=true">Supprimer</button></td>
    </tr>
</template>

<script>
import GameService from "../services/game.service";

export default {
    props: ['title', 'releaseDate', 'score'],
    data() {
        return {
            showPopperDelete: false,
            message:""
        }
    },
    methods: {
        deleteGame(title) {
            GameService.deleteGame(title).then(
                (response) => {
                    this.message = response.data.message
                    this.$parent.refreshGamesList()
                    setTimeout(() => {
                        this.message = "";
                    }, 5000);
                },
                (error) => {
                    this.message =
                    (error.response && error.response.data) 
                    || error.message 
                    || error.toString()
                    setTimeout(() => {
                        this.message = ""
                    }, 5000)
                }
            ) 
        }
    }
}
</script>
<style>
.popper-delete {
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
}
</style>
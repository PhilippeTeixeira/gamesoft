<template>
    <div class="container">
        <div class="d-flex justify-content-center border shadow p-4">
            <div class="row text-dark col-10">
                <h2 class="text-center mb-5">MON COMPTE</h2>
                <div class="col-9">
                    <div class="border p-2 m-2">
                        <div>
                            <p class="d-flex justify-content-between" v-for="(role, index) in currentUser.roles"
                                :key="index">
                                Type de compte : {{ role }}</p>
                        </div>
                    </div>
                    <div class="border p-2 m-2">
                        <div>
                            <p class="d-flex justify-content-between">Nom d'utilisateur : {{ currentUser.username }} <button
                                    class="btn btn-outline-dark ms-2" data-bs-toggle="collapse"
                                    data-bs-target="#change_name" aria-expanded="false"
                                    aria-controls="collapseOne">Changer</button></p>
                            <div class="accordion-collapse collapse mb-2" id="change_name">
                                <input class="col-6" type="text" placeholder="Entrez un nouveau nom" id="username"
                                    v-model="currentUser.username" required><button class="btn btn-success ms-2"
                                    data-bs-toggle="collapse" data-bs-target="#change_name" aria-expanded="false"
                                    aria-controls="collapseOne" @click="updateUserInfo()">Valider</button>
                            </div>
                        </div>
                        <div>
                            <p class="d-flex justify-content-between">Adresse E-mail : {{ currentUser.email }} <button
                                    class="btn btn-outline-dark ms-2" data-bs-toggle="collapse"
                                    data-bs-target="#change_mail" aria-expanded="false"
                                    aria-controls="collapseTwo">Changer</button>
                            </p>
                            <div class="accordion-collapse collapse" id="change_mail">
                                <input class="col-6" type="text" placeholder="Entrez une nouvelle adresse mail" id="email"
                                    v-model="currentUser.email" required><button class="btn btn-success ms-2"
                                    data-bs-toggle="collapse" data-bs-target="#change_mail" aria-expanded="false"
                                    aria-controls="collapseTwo" @click="updateUserInfo()">Valider</button>
                            </div>
                        </div>
                    </div>
                    <div class="border p-2 m-2">
                        <button class="btn btn-outline-dark" data-bs-toggle="collapse" data-bs-target="#change_password"
                            aria-expanded="false" aria-controls="collapseThree">Changer de mot de passe
                        </button>
                        <div class="accordion-collapse collapse" id="change_password">
                            <Form name="form" @submit="changePassword" :validation-schema="schema">
                                <Field name="password" class="col-6" type="password"
                                    placeholder="Entrez un nouveau mot de passe" id="passwordInput" />
                                <ErrorMessage name="password" class="text-danger" />
                                <button class="btn btn-success ms-2" data-bs-toggle="collapse"
                                    data-bs-target="#change_password" aria-expanded="false" aria-controls="collapseThree"
                                    type="submit">Valider</button>
                            </Form>
                        </div>
                    </div>
                    <div class="container d-flex justify-content-center">
                        <div class="row col-6 position-fixed">
                            <div v-if="message" class="alert rounded d-flex justify-content-between align-items-center" :class="successful ? 'alert-success' : 'alert-danger'">
                               <div class="align-self-center"><p class="fw-bold">{{ message }}</p></div>
                                <div><button class="btn p-0 m-0" @click="message=false"><i class="bi bi-x fw-bold" style="font-size: 30px;"></i></button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import UserService from '../services/user.service.js'
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from "yup";
var bcrypt = require("bcryptjs")

export default {
    name: 'AccountView',
    components: {
        Form,
        Field,
        ErrorMessage
    },
    data() {
        const schema = yup.object().shape({
            password: yup
                .string()
                .required("Vous devez entrer un mot de passe !")
                .min(6, "Votre mot de passe doit contenir au minimum 6 caractères !")
                .max(40, "Votre mot de passe ne doit pas excéder 40 caractères !")
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
        updateUserInfo() {
            this.loading = true;

            UserService.update(this.currentUser.id, this.currentUser)
                .then(response => {
                    this.loading = false
                    this.successful = true
                    console.log(response.data)
                    this.message = 'Données correctement sauvegardées !'
                    setTimeout(() => {
                        this.message = ''
                    }, 5000)
                })
                .catch(e => {
                    this.loading = false
                    this.successful = false
                    this.message = e
                    setTimeout(() => {
                        this.message = ''
                    }, 5000)
                    console.log(e);
                });
        },

        changePassword(pwd) {
            this.message = ''
            this.successful = false
            this.loading = true
            this.password = pwd.password
            this.passwordCrypt = bcrypt.hashSync(this.password, 8)
            UserService.changePassword(this.currentUser.id, {
                password: this.passwordCrypt,
            }).then(
                data => { 
                    this.password = data.password 
                    console.log(this.password)
                    this.successful = true
                    this.loading = false
                    this.message = "Votre nouveau mot de passe a bien été enregistré !"
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
                    setTimeout(() => {
                        this.message = ''
                    }, 5000)
                }
            )
        }
    }
};
</script>
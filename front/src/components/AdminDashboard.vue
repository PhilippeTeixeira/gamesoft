<template>
    <div class="container">
        <div class="row justify-content-center d-flex">
            <div class="container d-flex col-12 bg-light p-0" style="min-height:70vh; height: auto;">
                <div class="container col-2 bg-dark p-0">
                    <nav class="navbar bg-dark text-white p-0">
                        <ul class="navbar-nav col-12 font-weight-bold">
                            <a class="nav-link p-0" @click="currentTab = 'AccountView'; toggleTab('1')" href="#">
                                <li class="nav-item p-4 active" id="1">
                                    Mon compte
                                </li>
                            </a>
                            <a class="nav-link p-0 " @click="currentTab = 'GamesList'; toggleTab('2')" href="#">
                                <li class="nav-item p-4" id="2">
                                    Liste des jeux
                                </li>
                            </a>
                            <a class="nav-link p-0 " @click="currentTab = ''; toggleTab('3')" href="#">
                                <li class="nav-item p-4" id="3">
                                    Liste des comptes
                                </li>
                            </a>
                        </ul>
                    </nav>
                </div>
                <div class="container col-10 d-flex justify-content-center pt-5">
                    <div class="container col-11 d-flex justify-content-center">
                        <component :is="currentTab"></component>
                    </div>
                </div>
            </div>
        </div>
        <div class="row d-flex justify-content-center mb-4">
        </div>
    </div>
</template>

<script>
import GamesList from "../components/GamesList.vue"
import AccountView from "../components/AccountView.vue"

export default {
    name: 'AdminDashboard',
    components: {
        GamesList,
        AccountView
    },
    data() {
        return {
            currentTab:'AccountView',
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
        toggleTab(selection) {
            var tabs = document.getElementsByClassName("nav-item p-4")
            for( let i=0; i<tabs.length; i++ ) {
                    tabs[i].setAttribute("style", "background-color: #212529; color: #f8f9fa;")
                    tabs[i].setAttribute("class", "nav-item p-4")
            }
            document.getElementById(selection).setAttribute("style", "background-color: #f8f9fa; color: #212529;")
            document.getElementById(selection).setAttribute("class", "nav-item p-4 active")
        }

    }
};
</script>

<style>
ul>a:hover {
    background-color: #f8f9fa;
}
ul>a:hover {
    color: #212529;
}
ul>a>li.active {
    background-color: #f8f9fa;
    color:  #212529 
}
ul>a>li {
    color: #f8f9fa;
}
</style>
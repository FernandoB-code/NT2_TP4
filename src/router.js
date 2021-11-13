import Vue from "vue"
import VueRouter from "vue-router"

import Formulario from "./components/VueForm/index.vue"
import Objetos from "./components/Objets/index.vue"

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: "history",
    routes: [
        { path: "/", redirect: "/formulario"},
        { path: "/formulario", component: Formulario},
        { path: "/objetos", component: Objetos},
    ]
})
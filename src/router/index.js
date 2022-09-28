import { createRouter, createWebHistory } from "vue-router"

import Portfolio from "../views/Folio"
import Home from "../views/Home"
import Game from "../views/Game"

const routes = [
    {
        path: "/portfolio",
        name: "Portfolio",
        component: Portfolio
    },

    {
        path: "/game/:id",
        name: "Game",
        component: Game,
        props: true
    },

    {
        path: "/",
        name: "Home",
        component: Home
    }
]

const router = createRouter({ history: createWebHistory(process.env.BASE_URL), routes });

export default router

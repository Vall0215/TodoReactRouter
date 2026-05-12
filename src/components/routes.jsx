import { Component } from "react";
import Ejemplo from "../pages/ejemplo";
import Home from "../pages/home";
import Layout from "./Layout";
import Valeryhernandez from "../pages/valeryhernandez";

export const childrenRouterList = [
    {
        index: true,
        Component: Home,
        text: "Home"
    },
    {
        path: "login",
        Component: Ejemplo,
        text: "Ejemplo"
    },
    {
        path: "Valery" ,
        Component: Valeryhernandez ,
        text: "Valery HM"
    }
]
import React from "react";
import PageMain from "../components/pages/PageMain/PageMain";
import PageLogin from "../components/pages/PageLogin";
import { RouteData } from "../types/common";

// import About from "../pages/About";
// import PostIdPage from "../pages/PostIdPage";
// import Posts from "../pages/Posts";
// import Login from "../pages/Login";



export const privateRoutes: RouteData[] = [
    {path: "/", component: PageMain, caption: "Главная", isVisible: true},
]

export const publicRoutes: RouteData[] = [
    {path: "/", component: PageMain, caption: "Главная", isVisible: true},
    {path: "/tariffs", component: PageMain, caption: "Тарифы", isVisible: true},
    {path: "/faq", component: PageMain, caption: "FAQ", isVisible: true},
]
import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
    route("/", "home.tsx"),
    route("/login", "login.tsx"),
    route("/register", "register.tsx"),
] satisfies RouteConfig;
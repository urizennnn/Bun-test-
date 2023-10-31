import { Elysia } from "elysia";
import { Routes } from "./controller/test";
import {testing,plugin} from './controller/test2'
// const routes = new Routes()
const elysia = Elysia
const app = new elysia().use(testing)
const PORT  = process.env.PORT || 3000

app.listen(PORT)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

import { Elysia,t } from "elysia";
import { Routes,db } from "./controller/test";
import {testing,plugin} from './controller/test2'
// const routes = new Routes()
const elysia = Elysia
const app = new elysia().get('/db-try',({body})=>{
   const message:string = 'This is a Bun test'
  
return  db(message)


}).get('/test',()=>'Workingx').route('db','/testing',()=>{

})
const PORT  = process.env.PORT || 3000

app.listen(PORT)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

import {Elysia} from 'elysia'

export const testing = (app:Elysia)=> app.get('/testing/:id',({params:{id}})=>{
    const UserId:string = id
    return UserId
})

export const plugin = (app: Elysia) => app.get('/from-plugin', () => 'Hi')

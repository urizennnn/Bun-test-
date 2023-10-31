import {Elysia,t} from 'elysia'
// import {PrismaClient} from '@pris'

export class Routes extends Elysia{
    testroute(context:any){
const id = context.params.id
return new Response(id)
    }
}
import {Elysia,t} from 'elysia'
import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()
export async function db(text:any){
    const test = await prisma.test.create({
        data:{
            message:text
        }
    })
    console.log(test)
    return test
}

export class Routes extends Elysia{
    testroute(context:any){
const id = context.params.id
return new Response(id)
    }
}
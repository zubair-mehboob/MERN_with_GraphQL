// const express =  require('express')
// const {graphqlHTTP} = require( "express-graphql")
// const cors = require( 'cors')
// const db = require("./db")
import express from 'express'
import cors from 'cors'
import {graphqlHTTP} from 'express-graphql'
import {AppDataSource} from './db';
import { schema } from './Schema';
const main = async () => {
    AppDataSource
const app = express()
app.use(cors())
app.use(express.json())
app.use("/graphql", graphqlHTTP({
    schema,
    graphiql:true
}))
app.listen(3001, () => {
    console.log("server is running on 3001")
})
} 

main().catch(err => {
    console.warn(err)
})

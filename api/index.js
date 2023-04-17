console.log("Hola mundo, mi primer bakend")
import express from "express"
import indexRouter from "./routes/aprendices.routes.js"
import cors from 'cors';

const app = express()
//Permite procesar los datos del cliente,si es un objeto json lo podra recibir
app.use(express.json())
//Permite que nos podamos comunicar entre aplicaciones web
app.use(cors('*'))

app.use(indexRouter)

app.listen(3000);
console.log(`Aplicacion corriendo en el puerto ${3000}`)
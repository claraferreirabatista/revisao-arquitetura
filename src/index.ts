/*
ao clonar um repositório verificar o package.json
e dar o npm i, para instalar todas da depedencias
trazer todos arquivos no src
configuração de middleware no index
comando para rodar o servidor;
a partir disso executar o primeiro teste npm run dev
Estou fazendo uma configuração de dentro para fora 


index >>> banco de dados >> configuração knex >> criação do Router >> 
*/



import express from 'express'
import cors from 'cors'
import { productRouter } from './routers/productsRouter'
/*
import { brandRouter } from './routers/brandRouter'
 */
const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => console.log("Server rodando na porta 3003"))

app.use("/products", productRouter)

/*
app.use("/brands", brandRouter) */
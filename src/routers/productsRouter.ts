/* Criação da pasta Router
Contendo arquivos definindo as rotas(caminho) para as requisições
organiza rota e contraliza os endpoints*/

import express from 'express'

import { ProductBusiness } from '../business/ProductBusiness'
import { ProductController } from '../controller/ProductController'
import { ProductDatabase } from '../database/ProductDatabase' 

export const productRouter = express.Router()

const productController = new ProductController(
    new ProductBusiness(
        new ProductDatabase()
    )
)

productRouter.get('/', productController.getProducts)
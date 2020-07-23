import express from 'express'
import { MongoHelper } from './mongo-helper'

const app = express()

app.post('/', async (req, res) => {
  const userModel = await MongoHelper.instance.getCollection('users')
  await userModel.insertOne({ name: 'Danilo' })
  res.send('usuário criado')
})

app.get('/', async (req, res) => {
  const userModel = await MongoHelper.instance.getCollection('users')
  const users = await userModel.find().toArray()
  res.send({ users })
})

app.listen(5050, () => console.log(`server running`))
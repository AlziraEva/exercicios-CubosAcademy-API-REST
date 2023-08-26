const express = require('express')
const { listarAlunos, obterAluno, cadastrarAluno, excluirAluno } = require('./controladores/alunos')

const rotas = express()

rotas.get('/alunos', listarAlunos)
rotas.get('/alunos/:id', obterAluno)
rotas.post('/alunos', cadastrarAluno)
rotas.delete('/alunos/:id', excluirAluno)


module.exports = rotas




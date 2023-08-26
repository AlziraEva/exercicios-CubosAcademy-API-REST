let { aluno_id, alunos } = require('../dados/bancodedados')

const listarAlunos = (req, res) => {
    return res.status(200).json(alunos)
}

const obterAluno = (req, res) => {
    const { id } = req.params
    const aluno = alunos.find((aluno) => {
        return aluno.id === Number(id)
    })
    if (!(Number(id))) {
        return res.status(400).json({ mensagem: 'ID deve ser um número válido.' })
    }
    if (!aluno) {
        return res.status(404).json({ mensagem: 'aluno não encontrado' })
    }


    return res.status(200).json(aluno)

}

const cadastrarAluno = (req, res) => {
    const { nome, sobrenome, idade, curso } = req.body

    if (nome.trim() === "") {
        return res.status(404).json({ mensagem: 'conteúdo do nome precisa ser informado' })
    }
    if (sobrenome.trim() === "") {
        return res.status(404).json({ mensagem: 'conteúdo do sobrenome precisa ser informado' })
    }

    if (curso.trim() === "") {
        return res.status(404).json({ mensagem: 'conteúdo do curso precisa ser informado' })
    }

    if (!nome) {
        return res.status(400).json({ mensagem: 'nome é obrigatório' })
    }
    if (!sobrenome) {
        return res.status(400).json({ mensagem: 'sobrenome é obrigatório' })
    }
    if (!idade) {
        return res.status(400).json({ mensagem: 'idade é obrigatória' })
    }

    if (!curso) {
        return res.status(400).json({ mensagem: 'curso é obrigatório' })
    }

    if (idade < 18) {
        return res.status(400).json({ mensagem: 'Idade precisa ser maior que 18 anos' })
    }

    const aluno = {
        id: aluno_id,
        nome,
        idade,
        sobrenome,
        curso
    }

    alunos.push(aluno)

    return res.status(201).json()

}

const excluirAluno = (req, res) => {
    const { id } = req.params
    const aluno = alunos.find((aluno) => {
        return aluno.id === Number(id)
    })
    if (!aluno) {
        return res.status(404).json({ mensagem: 'aluno não foi encontrado ' })
    }
    if (!Number(id)) {
        return res.status(400).json({ mensagem: 'id deve ser um número válido' })
    }

    let alunoDeletado = alunos.splice(alunos.indexOf(aluno), 1)

    return res.status(200).json(alunoDeletado)
}
module.exports = {
    listarAlunos,
    obterAluno,
    cadastrarAluno,
    excluirAluno
}


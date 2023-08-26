
const validarSenha = (req, res, next) => {
    const { senha } = req.query
    if (!senha) {
        return res.status(401).json({ mensagem: 'senha não informada' })
    }
    if (senha !== "cubos123") {
        return res.status(401).json({ mensagem: 'senha incorreta' })
    }
    next()
}

module.exports = validarSenha
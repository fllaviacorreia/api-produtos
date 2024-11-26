const clientRepository = require('../repository/client')

const getAll = () => {
    const clients = clientRepository.getAll()

    if(clients.length === 0){
        return {message: "Nenhum cliente cadastrado."}
    }

    return clients
}

module.exports = {
    getAll,
}
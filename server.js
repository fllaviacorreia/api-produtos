const express = require('express')

const productRouters = require("./routes/products")

const port = 4000

const app = express();

app.use("/produtos", productRouters)

app.use("/", (req, res) => {
    return res.send("API de Gerenciamento de Produtos.")
})

app.listen(port, () => {
    console.log("Server listening in port " + port)
})
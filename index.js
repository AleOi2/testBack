const express = require('express');
const cors = require('cors');
const router = express.Router();
const port = 3000;
const app = express();

app.use(cors());
router.get('/teste', (req, res) => {
    try {
        const jsonSend = {
            teste: "Mostrando como enviar informação"
        };
        // throw new Error("Mensagem de errro");
        res.status(200).send(jsonSend);
        
    } catch (error) {
        res.status(500).send(error);        
    }
});
app.use(router);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

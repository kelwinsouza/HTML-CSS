const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Helo World')
});

app.listen(port, (err) =>{
    if(err){
        console.log(`algo deu errado no servidor, tente algo diferente: ${err}`)
        return;
    }
    console.log(`deu tudo certinho!! ${port}`)
})




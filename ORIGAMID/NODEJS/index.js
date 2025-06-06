const app = require('./src/services/app')
const port = 3000


app.listen(port, (err) =>{
    if(err){
        console.log(`algo deu errado no servidor, tente algo diferente: ${err}`)
        return;
    }
    console.log(`deu tudo certinho!! ${port}`)
})




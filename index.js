const express = require('express');
const main = require('./main')


const app = express();


main().catch(console.error)




const port = process.env.PORT || 3000;


app.listen(port, ()=>{
    console.log(`nodemailerProject is listening at http://localhost:${port}`)
})

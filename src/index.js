const express = require('express');

//INIT
const app = express();

//CONFIG
app.set('port', 8080);


app.listen( app.get('port') , ()=>{
    console.log(`Server on port ${app.get('port')}`);
});




const express = require('express');
const app = express();
const port = 8000;

app.get('/', (rez, res) => {
   res.send('Hallo Aku Bernard');
})

app.listen(port,()=> console.log(`App listen on port ${port}`))
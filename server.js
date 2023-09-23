const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('hello world')
});

app.listen(port, (err) => {
    if(err) {
      console.log(err);
    } else {
      console.log("The server is running ");
    }
 })
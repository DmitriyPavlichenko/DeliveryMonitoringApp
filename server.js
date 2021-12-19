const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('<FOLDER_NAME>'));

app.get('/*', (req,res,next) => {
  res.sendFile('/');
});


app.listen(process.env.PORT || 8000);
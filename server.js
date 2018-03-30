const express = require('express');
const logger = require('morgan');
const app = express();
const port = process.env.PORT || 3000;
const routes = ['/', '/home'];

app.use(logger('dev'));
app.use(express.static(__dirname + "/app/resources"));

app.get(routes, (req, res) => {
  res.sendFile(__dirname + '/app/index.html');
})

app.listen(port, () => console.log(`server running on port *${port}`));

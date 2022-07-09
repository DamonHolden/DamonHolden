const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/styles.css', function (req, res) {
  res.sendFile(path.join(__dirname, '../frontend/public', 'styles.css'));
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

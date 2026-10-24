const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index'); // आपके index.ejs को रेंडर करेगा
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

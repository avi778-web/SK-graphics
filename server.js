const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index'); // आपके index.ejs को रेंडर करेगा
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

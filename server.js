const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'src/assets')));

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

const express = require('express');
const { renderFile } = require('ejs');

const PORT = process.env.PORT ?? 3000;
const app = express();

app.engine('html', renderFile);
app.use(express.static('build', { extensions: ['html'] }));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = app;

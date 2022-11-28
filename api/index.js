const express = require('express');
const { renderFile } = require('ejs');

const PORT = process.env.PORT ?? 3000;
const DOCS_BUILD = __dirname + './../build';

const app = express();

app.engine('html', renderFile);
app.use(express.static('build', { extensions: ['html'] }));

app.use(function (req, res) {
  const isShimmer = req.url.startsWith('/shimmer');
  const isNext = req.url.startsWith('/next');

  if (isShimmer) {
    res.render(DOCS_BUILD + '/shimmer/404.html');
  } else if (isNext) {
    res.render(DOCS_BUILD + '/next/404.html');
  } else {
    res.render(DOCS_BUILD + '/404.html');
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = app;

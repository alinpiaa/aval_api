const app = require('express')();
const port = process.env.PORT || 8080;
const Cell = require('./models/Cell');

const generateField = require('./generateField');

app.listen(port, () => {
  shouldGenerateNewField()
    .then((toGenerate) => {
      if (!toGenerate) return;

      generateField();
    });

  console.log(`listening on ${port}`);
});

function shouldGenerateNewField() {
  return Cell.estimatedDocumentCount()
    .then(count => !Boolean(count));
}

app.get('/', (req, res) => {
  Cell.estimatedDocumentCount()
    .then(count => res.json({ 
      sessionInitialized: true,
      cellsX: Math.sqrt(count),
      cellsY: Math.sqrt(count),
    }))
    .catch(err => console.error(err));
});
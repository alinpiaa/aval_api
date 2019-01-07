const app = require('express')();
const port = process.env.PORT || 8080;
const Cell = require('./models/Cell');

const generateField = require('./helpers/world/generateField');
const { generateAllFood } = require('./helpers/world/generateFood');

app.listen(port, () => {
  shouldGenerateNewField()
    .then((toGenerate) => {
      if (toGenerate) return generateField();
    })
    .then(() => {
      return generateAllFood();
    })

  console.log(`listening on ${port}`);
});

function shouldGenerateNewField() {
  return Cell.estimatedDocumentCount()
    .then(count => !Boolean(count));
}

app.get('/', (req, res) => {
  Cell.find({}).select('-_id -__v').exec()
    .then((cells) => {
      const sideLength = Math.sqrt(cells.length);
      
      return res.json({
        // TODO: handle if not
        sessionInitialized: true,
        cellsX: sideLength,
        cellsY: sideLength,
        cells,
      });
    })
  .catch(err => console.error(err));
});

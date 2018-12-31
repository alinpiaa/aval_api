const app = require('express')();
const port = process.env.PORT || 8080

app.listen(port, () => console.log(`listening on ${port}`));

app.get('/', (req, res) => {
  res.send('Hello world');
});
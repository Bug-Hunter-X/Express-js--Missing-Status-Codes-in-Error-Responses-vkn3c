const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might fail
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      // Successful response
      res.status(200).send('Hello from Express!');
    } else {
      // Proper error response with status code
      res.status(500).send('Something went wrong!');
    }
  }, 1000);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
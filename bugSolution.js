const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).send({ error: 'Request body is empty or missing.' });
    }
    const user = req.body;
    console.log('Received user:', user);
    res.status(201).send('User created');
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).send({ error: 'Internal server error' });
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));
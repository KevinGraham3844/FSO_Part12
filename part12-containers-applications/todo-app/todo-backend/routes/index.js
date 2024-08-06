const express = require('express');
const router = express.Router();

const configs = require('../util/config')
const redis = require('../redis')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

router.get('/statistics', async (req, res) => {
  const currentTodos = await redis.getAsync('added_todos')
  const displayTodos = {
    "added_todos": Number(currentTodos)
  }
  res.json(displayTodos)
})

module.exports = router;

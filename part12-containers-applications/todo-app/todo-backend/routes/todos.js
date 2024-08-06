const express = require('express');
const { Todo } = require('../mongo')
const router = express.Router();
const redis = require('../redis')
/* GET todos listing. */
router.get('/', async (_, res) => {
  const todos = await Todo.find({})
  res.send(todos);
});



/* POST todo to listing. */
router.post('/', async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false
  })
  const todos_key = await redis.getAsync('added_todos');
  if (!todos_key) {
    await redis.setAsync('added_todos', 1);
  } else {
    await redis.setAsync('added_todos', Number(todos_key) + 1)
  }
  res.send(todo);
});




const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params
  req.todo = await Todo.findById(id)
  if (!req.todo) return res.sendStatus(404)

  next()
}

/* DELETE todo. */
singleRouter.delete('/', async (req, res) => {
  await req.todo.delete()  
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get('/', async (req, res) => {
  if (req.todo) {
    res.json(req.todo);
  } else {
    res.status(404).end();
  }
});

/* PUT todo. */
singleRouter.put('/', async (req, res) => {
  const body = req.body;

  const changedTodo = {
    text: body.text,
    done: body.done
  }

  const updatedTodo = await Todo.replaceOne(req.todo, changedTodo)
  res.json(updatedTodo)
});

router.use('/:id', findByIdMiddleware, singleRouter)


module.exports = router;

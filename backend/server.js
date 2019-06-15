const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const bodyParser = require('body-parser');

const app = express();

app.use(
    '/graphql',
     graphqlHTTP({
    schema,
    graphiql: true
  })
  );


const userController = require('./controllers/user-controller');
const notFoundController = require('./controllers/not-found-controller');

app.get('/', function (req, res) {
  res.send('hello world');
})

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/users', userController.all);
app.post('/user', userController.create);
app.get('/user/:id', userController.get);
// app.put('/user/:id', userController.update);
// app.delete('/user/:id', userController.destroy);

app.post('/api/users', function(req, res) {
  console.log("???>> " + req.query.id);
  var user_id = req.query.id;
  var name = req.query.name;
  var email = req.query.email;

  res.send(user_id + ' ' + name + ' ' + email);
});

app.get('*', notFoundController.show);

module.exports = app;

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


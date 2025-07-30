const express = require('express');
const postRouter = require('./routes/postRouter');
const userRouter = require('./routes/userRouter');
// create the server and setup routes
const app = express();
app.use(postRouter);
app.use(userRouter);
app.get('/', (req, res) => res.send('Express Lambda Example Server'));
// run the server locally
app.listen(3030, () => console.log('Server listening at http://localhost:3030'));

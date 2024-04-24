require('dotenv').config();
// -----> allows .env
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const connectToDb = require('./config/connectToDb.js');
// This pulls our Mongoose connection into application

const Note = require('./models/note');
const User = require('./models/user');
const Tag = require('./models/tag');

const notesController = require('./controllers/notesController.js');
const usersController = require('./controllers/usersController.js');
const tagsController = require('./controllers/tagsController.js');

const cors = require('cors');
// ---> Recieving reqs on cross-origins **
app.use(express.json());
// Express doesnt naturally convert our data to json
app.use(cors());
connectToDb();
// This initializes our connectToDB() function
// -------------------------------------------------reQs

app.get('/', (req, res) => {
    res.send('This is a Landing Page');
});

// Obj: We want to establish CRUD routes for our Notes Model
app.get('/notes', notesController.fetchAllNotes);
// -----------------> GET all Notes - [Read]
app.get('/notes/:id', notesController.fetchNote);
// -----------------> GET a Specific Note by ID - [Read]
app.post('/notes', notesController.createNote);
// -----------------> Create a Notes - [Create / POST]
app.put('/notes/:id', notesController.updateNote);
// -----------------> Update a Specific Note - [Update]
app.delete('/notes/:id', notesController.deleteNote);
// -----------------> Delete a Specific Note - [Delete]
// -------------------------------------------------Routing

// User routes
app.get('/users', usersController.fetchAllUsers);
app.post('/users', usersController.createUser);
app.put('/users/:id', usersController.updateUser);
app.delete('/users/:id', usersController.deleteUser);

// Tag routes
app.get('/tags', tagsController.fetchAllTags);
app.post('/tags', tagsController.createTag);
app.put('/tags/:id', tagsController.updateTag);
app.delete('/tags/:id', tagsController.deleteTag);

app.listen(PORT, () => {
    console.log(`Express Server Listening on port num: ${PORT}`);
});
// -------------------------------------------------Server

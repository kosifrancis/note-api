const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

const notes = [
    {
        id: 1,
        title: 'Note 1',
        content: 'This is the first note.',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 2,
        title: 'Note 2',
        content: 'This is the second note.',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }
];

app.get('/', (req, res) => {
  res.send('WELCOME TO MY NOTES!');
});

app.get('/api/notes', (req, res) => {
  res.json(notes);
});

app.post('/api/notes', (req, res) => {
   if (!req.body.title || !req.body.content) {
        return res.status(400).json({ error: 'Title and content are required' });
    }
   
    const newNote = {
        id: notes.length + 1,
        title: req.body.title,
        content: req.body.content,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
    notes.push(newNote);
    res.status(201).json(newNote);
           
});

app.get('/api/notes/:id', (req, res) => {
    const id = 
    Number(req.params.id);
    const note = notes.find(n => n.id === id);
    if (!note) {
        return res.status(404).json({ error: 'Note not found' });
    }
    res.json(note);
});

app.put('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id);
    const note = notes.find(n => n.id === id);
    if (!note) {
        return res.status(404).json({ error: 'Note not found' });
    }
    if (!req.body.title || !req.body.content) {
        return res.status(400).json({ error: 'Title and content are required' });
    }
    note.title = req.body.title;
    note.content = req.body.content;
    note.updatedAt = new
     Date().toISOString();
    res.json(note);
});
app.delete('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id);
    const noteIndex = notes.findIndex(n => n.id === id);
    if (noteIndex === -1) {
        return res.status(404).json({ error: 'Note not found' });
    }
    notes.splice(noteIndex, 1);
    res.status(204).send();
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
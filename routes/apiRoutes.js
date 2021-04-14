// *******************************
// A. Connect dependency (Express)
const router = require('express').Router();


// *******************************
// B. Connect archive.js
const archive = require('../db/archive');


// *******************************
// C. GET and various CRUD Actions

// 01. Retrieve all notes
router.get('/notes', (req, res) => {
    archive
        .getNotes()
        .then((notes) => {
            return res.json(notes);
        }).catch((error) => {
            console.log(`An error has occurred!`);
            res.status(500).json(error);
        });
});

// 02. Post a new note
router.post('/notes', (req, res) => {
    archive
        .addNote(req.body)
        .then((note) => res.json(note))
        .catch((error) => {
            console.log(`An error has occurred!`);
            res.status(500).json(error);
        });
});

// 03. Delete a note
router.delete('/notes/:id', (req, res) => {
    archive
        .removeNote(req.params.id)
        .then(() => {
            res.json({ ok: true })
            console.log(`Note deleted.`);  
        }).catch((error) => {
            console.log(`An error has occurred!`);
            res.status(500).json(error);
        });
});


// *******************************
// D. Export router
module.exports = router;
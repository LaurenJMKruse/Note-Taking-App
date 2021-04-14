// *******************************
// A. Establish dependencies

// 01. Built-in
const fs = require('fs');
const util = require('util');

// 02. Universally Unique Indentifier
const uuidv1 = require('uuid/v1');


// *******************************
// B. Establish read/write
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


// *******************************
// C. Archive actions: CRUD, GET and parse, read, write
class Archive {

    // ------------------------------------
    // 01. CRUD

    // a. Create
    addNote(note) {
        const { title, text } = note;

        // i. Check for missing input
        if (!title) {
            throw new Error('Your note must have a title.');
        }
        
        if (!text) {
            throw new Error('You forgot to add your note!');
        }

        // ii. Add UUID
        const newNote = { title, text, id: uuidv1() };

        // iii. Incorporate new note
        return this.getNotes()
            .then((notes) => [...notes, newNote])
            .then((updatedNotes) => this.write(updatedNotes))
            .then(() => newNote);
    };

    // b. Delete
    removeNote(id) {
        return this.getNotes()
            .then((notes) => notes.filter((note) => note.id !== id))
            .then((filteredNotes) => this.write(filteredNotes));
    };


    // ------------------------------------
    // 02. GET notes to parse
    getNotes() {
        return this.read().then((notes) => {
            let parsedNotes;
            
            try {
                parsedNotes = [].concat(JSON.parse(notes));
            } catch (error) {
                parsedNotes = [];
            }
            
            return parsedNotes;
        });
    };


    // ------------------------------------
    // 03. Read and Write

    // a. Read
    read() {
        let readFile = readFileAsync('db/db.json', 'utf8');
        return readFile;
    };

    // b. Write
    write(note) {
        let writtenFile = writeFileAsync('db/db.json', JSON.stringify(note));
        return writtenFile;
    };
};


// *******************************
// D. Export Archive
module.exports = new Archive();

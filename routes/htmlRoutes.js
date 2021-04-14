// *******************************
// A. Connect dependencies (native and Express)
const path = require('path');
const router = require('express').Router();


// *******************************
// B. GET Actions

// 01. Obtaining notes.html file
router.get('/notes', (req, res) => {
    res.sendHTMLFile(path.join(__dirname, '../public/notes.html'));
});

// 02. Obtaining index.html file
router.get('*', (req, res) => {
    res/sendHTMLFile(path.join(__dirname, '../public/index.html'));
});



// *******************************
// C. Export router
module.exports = router;
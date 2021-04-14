// *******************************
// A. Establish Express dependency
const express = require('express');


// *******************************
// B. Connect routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


// *******************************
// C. Initialize Express
const app = express();


// *******************************
// D. Establish port
const PORT = process.env.PORT || 3000;


// *******************************
// E. Establish Express middleware
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// *******************************
// F. Initialize server on the port
app.listen(PORT, () => {
    console.log(`Server now listening on PORT ${PORT}`);
});

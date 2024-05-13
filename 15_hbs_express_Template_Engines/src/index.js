const express = require('express');
const app = express();
const path = require('path');

// Set 'views' directory for any views 
app.set('views', path.join(__dirname, '../views'));

// Set Handlebars as the view engine
app.set('view engine', 'hbs');

// Set up static directory to serve static files
app.use(express.static(path.join(__dirname, '../public')));

// Define route to render index.hbs
app.get('/', (req, res) => {
    res.render('index', {
        countryName : "Indonesia"
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

require("babel-core/register");
var express = require('express');
var app = module.exports = express();
require.extensions['.scss'] = function() {return null}


app.set('views', require('path').join(__dirname, '/views'));
app.engine('.hbs', require('express-handlebars')({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs')

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use('/assets', express.static('./app/assets'));

// routes
require('./app.js')(app);

app.listen(3000, function() {
  console.log('running on port 30000')
});

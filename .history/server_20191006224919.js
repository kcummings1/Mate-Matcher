//=========\\====Dependencies====//==========\\

var express = require("express");
var path = require("path");

//=========\\====Sets up the Express App====//==========\\

var app = express();
var PORT = process.env.PORT || 8080;

//=========\\====Sets up Express App to handle data parsing====//==========\\

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//=========\\====Requires /api and html /routes====//==========\\

require("/routing/apiRoutes")(app);
require("/routing/htmlRoutes")(app);

//=========\\====Server is listening====//==========\\

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);

});




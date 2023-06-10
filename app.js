const express = require("express");
const app = express();

app.use(express.json({ extended : true}));
// Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

app.use(express.static('node_modules'));
app.use('/bootstrap', express.static(__dirname + 'node_modules/bootstrap/dist/css/bootstrap.min.css'));

// Set views
//app.use(express.static('./views'));
app.set('view engine', 'ejs');
app.set('views', './views');;


app.get('/', (req, res) =>{
    return res.render('Login');
});

app.get('/home', (req, res) =>{
    return res.render('Menu');
});

app.post('/home', (req, res) => {
    return res.render('Menu');
});

app.listen(7000, () =>{
    console.log("Server is running on port 7000!");
});
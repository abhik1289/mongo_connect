const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://theabhik2020:msEoJrJ3IXdvrIMd@cluster0.z3kjoiu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Connected!')).catch((err) => console.log(err));
    
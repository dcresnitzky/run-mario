const mongoose = require('mongoose')

let app = () => {
    //Set up default mongoose connection
    mongoose.connect("mongodb://test:test@localhost:27017/test", { useNewUrlParser: true });
    console.log('1');

    //Get the default connection
    let db = mongoose.connection
    console.log('2');

    //Bind connection to error event (to get notification of connection errors)
    db.on('error', console.error.bind(console, 'MongoDB connection error:'))
    console.log('3');

    const Schema = mongoose.Schema({

               name: String
    })

    let Migration = mongoose.model('Migration', Schema)

    // Create an instance of model SomeModel
    let awesome_instance = new Migration({ name: 'daniel' })
    console.log('4');

    // Save the new model instance, passing a callback
    awesome_instance.save(function (err) {
        console.log('5');
        if (err) console.log(err); return;

    });
    console.log('6');

};

app()
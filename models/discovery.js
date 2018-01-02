const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const fs = require('fs');
const assert = require('assert');

//link to mongo db
var dbURL = "mongodb://localhost:27017/discoveryDb";

// discovery data model
const DiscoverySchema = new Schema({
    Year: {
        type: Number
    },
    Discovery: {
        type: String
    },
}, {
    "versionKey": false
    /*default for versionKey (__v) is true. for our purpose, we don't need the version key. 
    instead, to keep our collection documents' format consistent, we are setting it to false.*/
});

//saving the JSON data into a variable
const discoveries = JSON.parse(fs.readFileSync('../historyJson.json', 'utf-8'));

//defining mongoose Model based on the schema defined above
var Discovery = mongoose.model('discovery', DiscoverySchema);

//db connection using mongoose
mongooseConnect(() => {
    var db = mongoose.connect(dbURL, {
        useMongoClient: true
    });
    Discovery.collection.remove({})
    Discovery.collection.insertMany(discoveries, function(err, r) {
        assert.equal(null, err);
        //close db and server on receiving SIGINT signal from the terminal
        process.on('SIGINT', () => {
            db.close();
            server.close();
        });

    });
});

//using callback to ensure data loading before querying takes place
function mongooseConnect(callback) {
    setTimeout(callback, 50);
}


module.exports = Discovery;
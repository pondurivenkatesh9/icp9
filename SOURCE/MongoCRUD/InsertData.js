/**
 * Created by mnpw3d on 20/10/2016.
 */
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://pondurivenkatesh9:potlurua123@ds115124.mlab.com:15124/icp9';
//var url = 'mongodb://marmik:2621@ds051923.mlab.com:51923/demo';
var insertDocument = function(db, callback) {
    db.collection('users').insertOne( {
        "fname" : "venkatesh",
        "lname" : "ponduri",
        "address":{
            "city":"Kansas City",
            "state":"MO"
        },
        "education" : {
            "university":"UMKC",
            "degree":"Master of Science",
            "major":"Computer Science"

        },
        "mail":"sjhv6@mail.umkc.edu",
        "phone":"9160010785"
    }, function(err, result) {
        assert.equal(err, null);
        console.log("Inserted a document into the icp9 collection.");
        callback();
    });
};
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    insertDocument(db, function() {
        db.close();
    });
});

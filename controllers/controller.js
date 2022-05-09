
const MongoClient = require("../db/db");
const url = "mongodb://localhost:27017/";


class Controller {
    
    //sort result ascending(1) or descending(-1)

    static async order(req, res) {
        try {

            MongoClient.connect(url, function (err, db) {
                if (err) throw err;
                var dbo = db.db("test");
                var mysort = { name: 1 };
                dbo.collection("customers").find().sort(mysort).toArray(function (err, result) {
                    if (err) throw err;
                    console.log(result);
                    res.send(result);
                    db.close();
                });
            });
        } catch (e) {
            console.log(e);
        }
    }
   
    static async index(req, res) {
        try {

            MongoClient.connect(url, function (err, db) {
                if (err) throw err;
                var dbo = db.db("test");
                dbo.collection("customers").createIndex( { name: 1 } ) ,(err, result) => {
                    if (err) throw err;
                    console.log(result);
                    res.send(result); 
                    db.close();
                }
            }); 
        } catch (e) {
            console.log(e)
        }
    }

}
module.exports = Controller
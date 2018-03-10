var mysql = require('mysql');

var db = mysql.createPool({
    connectionLimit: 10,
    host: "10.3.131.174",
    user: 'root',
    password: '12345678',
    database: 'cake',
    multipleStatements: true
})

module.exports = {
    select: function(_sql, _callback){
        console.log(_sql);        
        db.query(_sql, function(error, results, fields){
            
            if(error){
                _callback({status: false, error: error})
            } else {
                _callback({status: true, data: {results, fields}});
            }
            
        })
    },
    insert: function(_sql, _callback){
        db.query(_sql, function(error, results, fields){
            console.log(_sql);
            if(error){
                _callback({status: false, error: error})
            } else {
                _callback({status: true, data: {results, fields}});
            }
            
        })
    },
    delete: function(_sql, _callback){

        db.query(_sql, function(error, results, fields){
            if(error){
                _callback({status: false, error: error})
            } else {
                _callback({status: true, data: {results, fields}});
            }
            
        })
    },
    update: function(_sql, _callback){
        db.query(_sql, function(error, results, fields){
            if(error){
                _callback({status: false, error: error})
            } else {
                _callback({status: true, data: {results, fields}});
            } 
        })
    }
}
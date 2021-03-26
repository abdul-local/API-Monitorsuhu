const mysql=require('mysql');
const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'dbpython'

});

con.connect(err=>{
    if (err) throw err;
    console.log('Success Connect to DB');
});

module.exports=con;
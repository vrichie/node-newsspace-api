const mysql=require('mysql');


// const pool=mysql.createPool({
//     connectionLimit:50,
//     host           :'localhost',
//     user           :'root',
//     password       :'',
//     database       :'newsspace'
    
// });



const pool=mysql.createPool({
    connectionLimit:50,
    host           :'localhost',
    user           :'richkin1',
    password       :'lvi;Qe5EG)C610',
    database       :'richkin1_richking'
    
});
module.exports=pool;

// $host="localhost";
// $usernamr="richkin1";
// $passcode="";
// $db="";
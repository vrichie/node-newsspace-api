const mysql=require('mysql');


// const pool=mysql.createPool({
   
//     host           :'localhost',
//     user           :'root',
//     password       :'',
//     database       :'newsspace'
    
// });

 
const pool=mysql.createPool({
    connectionLimit:1000,
    host           :'pld108.truehost.cloud',
    user           :'richkin1',
    password       :'lvi;Qe5EG)C610',
    database       :'richkin1_newsspace'
    
});

// const pool=mysql.createPool({

//     connectionLimit : 1000,
//     connectTimeout  : 60 * 60 * 1000,
//     acquireTimeout  : 60 * 60 * 1000,
//     timeout         : 60 * 60 * 1000,
//     host            :process.env.HOST_NAME,
//     user            :'richkin1',
//     password        :process.env.PASS_W,
//     database        :'richkin1_newsspace'
    
// });




module.exports=pool;


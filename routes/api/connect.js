const mysql=require('mysql');


// const pool=mysql.createPool({
   
//     host           :'localhost',
//     user           :'root',
//     password       :'',
//     database       :'newsspace'
    
// });
// pool.connect((err)=>{
//     if(err) throw err;
//     console.log("connected to db");

// })


const pool=mysql.createPool({
    host           :'pld108.truehost.cloud',
    user           :'richkin1',
    password       :'lvi;Qe5EG)C610',
    database       :'richkin1_richking'
    
});
module.exports=pool;


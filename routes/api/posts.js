const express=require('express');
const router=express.Router();
const pool=require('./connect');
const fs=require('fs');



router.get('/',(req,res)=>{
    pool.getConnection((err,connection)=>{
        if(err) throw err;
        connection.query('SELECT * FROM post ',(err,rows)=>{
            connection.release();

            if(!err){
                res.send(rows);
            }else{
                console.log(err);

            }
        })

    })



})



module.exports=router;
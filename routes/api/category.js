const express=require('express')
const router=express.Router();
const pool=require('./connect');


router.get('/:category/:id',(req,res)=>{
    pool.getConnection((err,connection)=>{
        if(err) throw err;
        let limit=parseInt(req.params.id)
        connection.query('SELECT * FROM post WHERE category=? ORDER BY id DESC LIMIT ?',[req.params.category,limit],(err,rows)=>{
            connection.release();

            if(!err){
                res.send(rows);
            }else{
                console.log(err)
            }
        })
    })
    console.log(req.para)

});






module.exports=router;
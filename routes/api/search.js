const express=require('express');
const router=express.Router();
const pool=require('./connect');

router.get('/:key/:cart', (req, res) => {
    pool.getConnection((err,connection)=>{
        if(err) throw err;

        if(req.params.cart=='all'){
            let key="%"+req.params.key+"%";
            connection.query('SELECT * FROM post WHERE title LIKE ?  ORDER BY id DESC LIMIT 5',[key],(err,rows)=>{
            connection.release();
            
            if(!err){
                res.send(rows)
            }else{
                console.log(err);
            }
            })
            // res.send(req.params.cart)
        }
        else{
            let key="%"+req.params.key+"%";
            let cart="%"+req.params.cart+"%";
            connection.query('SELECT * FROM post WHERE title LIKE ? AND category LIKE ?  ORDER BY id DESC LIMIT 5',[key,cart],(err,rows)=>{
                connection.release();
                
                if(!err){
                    res.send(rows)
                }else{
                    console.log(err);
                } 
            })

            // res.send(req.params.cart+req.params.key)
        }


    })
});





module.exports=router;
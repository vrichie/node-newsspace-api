const express=require('express');
const router=express.Router();
const pool=require('./connect');
const posts=require('../../posts');



router.get('/:slug',async (req,res)=>{
    // pool.getConnection((err,connection)=>{
    //     if(err) throw err;
    //     connection.query('SELECT * FROM post WHERE slug=?',[req.params.slug],(err,rows)=>{
    //         connection.release();

    //         if(!err){
    //             res.send(rows);

    //         }else{
    //             console.log(err);
    //         }
    //     })
    // })


    const slug=req.params.slug;

    posts.map((post,index)=>{
        if(post.slug==slug){
            res.json(post);
        }
    })

})




module.exports=router;
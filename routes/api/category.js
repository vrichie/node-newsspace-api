const express=require('express')
const router=express.Router();
const pool=require('./connect');
const posts=require('../../posts');


router.get('/:category/:id',async (req,res)=>{
    // pool.getConnection((err,connection)=>{
    //     if(err) throw err;
    //     let limit=parseInt(req.params.id)
    //     connection.query('SELECT * FROM post WHERE category=? ORDER BY id DESC LIMIT ?',[req.params.category,limit],(err,rows)=>{
    //         connection.release();

    //         if(!err){
    //             res.send(rows);
    //         }else{
    //             console.log(err)
    //         }
    //     })
    // })
    // console.log(req.para)
    const category = req.params.category;
    const limit = req.params.id;
    const allposts=[];

    posts.map((post,index)=>{

        if(allposts.length<limit){
            if(post.category==category){
                allposts.push(post);
                console.log(index);
            }
        }

    })
    res.json(allposts);

});






module.exports=router;
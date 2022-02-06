const express=require('express');
const router=express.Router();
const pool=require('./connect');
const posts=require('../../posts');



router.get('/',async (req, res) => {
    // pool.getConnection((err,connection)=>{
    //     if(err) throw err;
      
    //     connection.query('SELECT * FROM post WHERE category=? LIMIT 1;SELECT * FROM post WHERE category=? LIMIT 1;SELECT * FROM post WHERE category=? LIMIT 1;SELECT * FROM post WHERE category=? LIMIT 1;',["news","world","entertainment","gossip"],(err,rows)=>{
    //         connection.release();
    //         if(!err){
    //             res.send(rows);
    //         }else{
    //             console.log(err);
    //         }
    //     })
    // })
    const category='news';

    posts.map((post,index)=>{
        if(post.category==category){
            res.json(post);
        }
    })

});




module.exports=router;
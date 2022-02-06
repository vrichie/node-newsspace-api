const express=require('express');
const router=express.Router();
const pool=require('./connect');
const posts=require('../../posts');
const compare=require('string-similarity');

router.get('/:key/:cart',async (req, res) => {
    // pool.getConnection((err,connection)=>{
    //     if(err) throw err;

    //     if(req.params.cart=='all'){
    //         let key="%"+req.params.key+"%";
    //         connection.query('SELECT * FROM post WHERE title LIKE ?  ORDER BY id DESC LIMIT 5',[key],(err,rows)=>{
    //         connection.release();
            
    //         if(!err){
    //             res.send(rows)
    //         }else{
    //             console.log(err);
    //         }
    //         })
    //         // res.send(req.params.cart)
    //     }
    //     else{
    //         let key="%"+req.params.key+"%";
    //         let cart="%"+req.params.cart+"%";
    //         connection.query('SELECT * FROM post WHERE title LIKE ? AND category LIKE ?  ORDER BY id DESC LIMIT 5',[key,cart],(err,rows)=>{
    //             connection.release();
                
    //             if(!err){
    //                 res.send(rows)
    //             }else{
    //                 console.log(err);
    //             } 
    //         })

    //         // res.send(req.params.cart+req.params.key)
    //     }


    // })



    const key = req.params.key;
    const category=req.params.cart;
    const allposts=[]

    // console.log(key)
    if(category=='all'){
        posts.map((post,index)=>{
            if(compare.compareTwoStrings(post.title,key)>=0){
                allposts.push(post);
            }
        })
    }else{
        posts.map((post,index)=>{
            if(post.category==category){
                if(compare.compareTwoStrings(post.title,key)>=0){
                    allposts.push(post);
                }   
            }

        })
    }


    res.json(allposts);

// console.log(compare.compareTwoStrings('hello','hey'))







});





module.exports=router;
const express=require('express');
const router=express.Router();
const pool=require('./connect');
const multer=require('multer');
const upload=multer({dest:'./public/data/editors_images/'});
const { uuid } = require('uuidv4');


router.get('/', (req,res)=>{
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

        // res.send('hello')


})


router.post('/',upload.single('pic'),(req,res)=>{

    const {title,summary,body,category,tag,creator}=req.body;

    //slug
    let sl=title.replaceAll(' ','-');
    const slug=sl.replaceAll("'",'`');



    body.replaceAll("'",'`');

    summary.replaceAll("'",'`');


    //unique post id
 const postuid=uuid()

    const file=req.file.filename;



    pool.getConnection((err,connection)=>{

        if(err) throw err;

        connection.query("INSERT INTO post(title,pic,body,category,creator_uid,post_uid,slug,summary,tag) VALUES (?,?,?,?,?,?,?,?,?) ",[title,file,body,category,creator,postuid,slug,summary,tag],
                         (err,rows)=>{
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
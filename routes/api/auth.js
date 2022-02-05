const express=require('express');
const router=express.Router();
const pool=require('./connect');
const md5=require('md5');


router.post('/',async(req,res)=>{

    const {username,password}=req.body;
    

    pool.getConnection((err,connection)=>{
        // if(err) throw err;
        try{

        const sql="SELECT * FROM  editors WHERE username=?";
        connection.query(sql,[username],(err,rows)=>{

            console.log(err);
            console.log(rows);

            if(rows.length==0){
                const user_details={
                    message:"Check your username and password",
                    username_check:false,
                    password_check:false,
                }

                res.json(user_details);

            }else{

                if(rows[0].password===(md5(username+password))){
                    const user_details={
                        message:"success",
                        username_check:true,
                        password_check:true,
                        e_uid:rows[0].Editor_uid,
                        uname:rows[0].username,
                        fname:rows[0].firstname,
                        lname:rows[0].lastname,
                        pic:rows[0].pic,
                        tell:rows[0].tel,
                        mail:rows[0].email

                    }

                    res.json(user_details);

                }else{
                    const user_details={
                        message:"Check your password",
                        username_check:true,
                        password_check:false,
                    }
    
                    res.json(user_details);
                }

            }
        })

        }
        catch(err){
            console.log(err)
        }




    })

    //             console.log(md5("ritchie"+"   "));
    // console.log(req.body);

});







module.exports=router;
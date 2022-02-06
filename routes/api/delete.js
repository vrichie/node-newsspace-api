const express=require('express');
const router=express.Router();
const pool=require('./connect');


router.delete('/:id',async (req, res) => {

    const id=req.params.id;
    const sql="DELETE FROM post WHERE id=?"

    pool.getConnection((err,connection)=>{
        if(err) throw err;

        connection.query(sql,[id],(err,rows)=>{
            connection.release();

            if(rows.affectedRows==1){

                res.json({
                    message:"deleted sucessfully"
                })

            }else{
                res.json({
                    message:"deletion failed",
                    
                })

            }
            // console.log(err);
            // console.log(rows.affectedRows);
        })
    })

});






module.exports=router;
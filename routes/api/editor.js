const express = require('express');
const router=express.Router();
const multer=require('multer');

const pool = require('./connect');



router.post('/', async(req, res) => {



    console.log(req.body);
    //   pool.getConnection((err, connection) => {
    //       if (err) throw err;

    //   })
});
















module.exports =router;
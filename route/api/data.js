const express = require('express');
const con= require('../../config/db');
const router=express.Router();


router.get('/data',async(req,res)=>{

    try {
        await con.query(`SELECT*FROM tbl_suhu`,(err,result)=>{
            if (err) throw err;
            res.json({data:result});
        })
        
    } catch (error) {
        console.log(error);
        
    }

})
module.exports=router;
const express = require("express");
const { sql, poolPromise } = require("./database");

const app = express();

app.use(express.json());

app.get("/student/:id", async (req, resp) => {
    try {
        id=req.params.id;
        console.log(id);
        
        console.log(req.body);
        

        const pool = await poolPromise;
        const result = await pool.request().query(`Select * From authors where authorId='${id}'`);
        resp.json(result.recordset);
        
    }
    catch (err) {
        console.log(err);
        

    }

})

app.get("/student", async (req, resp) => {
    try {
        id=req.params.id;
        console.log(id);
        
        console.log(req.body);
        

        const pool = await poolPromise;
        const result = await pool.request().query(`Select * From stds2`);
        resp.json(result.recordset);
        
    }
    catch (err) {
        console.log(err);
        

    }

})

app.post("/student",async(req,resp)=>{

    const {fname,email}=req.body;
    const pool = await poolPromise;
    
    const result =await pool.request()
    .input("fname",sql.NVarChar,fname)
    .input("email",sql.NVarChar,email)
    .query(`Insert into stds2 values(@fname,@email)`);
    console.log(result);
    resp.json(result.recordset);
    

})

app.listen(3000, () => {
    console.log("started!!");

})
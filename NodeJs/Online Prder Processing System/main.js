const express = require("express");
const { sql, poolPromise } = require("./database");
const { EventEmitter } = require("events")
const app = express();

app.use(express.json());


orderEvent = new EventEmitter();

orderEvent.on("orderDone", () => {
    console.log("Order is Done !! from event");

})
function createOrder(id) {
    return new Promise((resolve) => {
        setTimeout(async () => {
            resolve("Order is Done !!");

            
        }, 10000);
    })
}





app.get("/orders/:id", async (req, resp) => {
    try {
        id = req.params.id;
        console.log(id);

        console.log(req.body);


        const pool = await poolPromise;
        const result = await pool.request().query(`Select * From orderstbl2 where id=${id}`);
        resp.json(result.recordset);

    }
    catch (err) {
        console.log(err);


    }

})

app.get("/orders", async (req, resp) => {
    try {
        id = req.params.id;
        console.log(id);

        console.log(req.body);

        const pool = await poolPromise;

        return result = await pool.request().query(`Select * From orderstbl2`);
       

    }
    catch (err) {
        console.log(err);


    }

})

app.post("/orders", async (req, resp) => {
    

    const { id, foodItem, customerName } = req.body;
            const pool = await poolPromise;

            const result = await pool.request()
                .input("id", sql.NVarChar, id)
                .input("foodItem", sql.NVarChar, foodItem)
                .input("customerName", sql.NVarChar, customerName)
                .query(`Insert into orderstbl2 values(@id,@foodItem,@customerName,'pending')`);
            console.log(result);
            resp.json(result.recordset);
            createOrder().then(async res=>{console.log(res);
                pool.request().query(`Update orderstbl2 set statuss='Succesfull' where id=${id}`);
                orderEvent.emit("orderDone");
            });


    

    // resp.json(result.recordset);



})

app.listen(3000, () => {
    console.log("started!!");

    

})
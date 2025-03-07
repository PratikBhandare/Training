const userControll = require("../controllers/userControll");
const UserController = require("../controllers/userControll")

const express = require("express")
const router = express.Router();


router.get('/:id',UserController.getUserByid);
router.get('/',UserController.getAllUser);
router.post('/addUser',UserController.addUser);
router.patch("/:id",UserController.updateUser)
router.delete('/delet',UserController.deletUsers);





http://localhost:3000/users/2


module.exports=router;
import express from 'express';
const router=express.Router();
import {addTask,getTask}from '../controllers/taskController.js'

router.post('/add',addTask);
router.get('/gettask',getTask);

export default router;
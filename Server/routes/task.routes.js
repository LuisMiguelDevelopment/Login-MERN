import { Router } from "express";
import {getTasks , getTask , createTask , updateTask , deleteTask }  from '../controllers/task.controller.js'
import {requireAuth}from '../middlewares/tokenValidation.js'
const router = Router();

router.get('/tasks',requireAuth, getTasks)
router.get('/task/:id',requireAuth, getTask)
router.post('/task',requireAuth, createTask)
router.put('/task/:id',requireAuth, updateTask)
router.delete('/task/:id',requireAuth, deleteTask)


export default router;
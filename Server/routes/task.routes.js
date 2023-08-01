import { Router } from "express";
import {getTasks , getTask , createTask , updateTask , deleteTask }  from '../controllers/task.controller'
const router = Router();


router.get('/tasks', getTasks)
router.get('/task/:id', getTask)
router.post('/task', createTask)
router.put('/task/:id', updateTask)
router.delete('/task/:id', deleteTask)
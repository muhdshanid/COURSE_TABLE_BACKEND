import express from 'express'
import { getAllCourses } from '../controllers/courseControllers.js'

const courseRouter = express.Router()

courseRouter.get("/get-all",getAllCourses)

export default courseRouter 
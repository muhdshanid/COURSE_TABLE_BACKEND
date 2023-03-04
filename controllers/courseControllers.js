import { courseDetails } from "../data/courses.js";

export const getAllCourses = (req,res) => {
    const allCourses = courseDetails.slice()
    if(allCourses.length > 0 ){
        return res.status(200).json(allCourses)
    }
    return res.status(404).json({message:"Courses not found"})
}
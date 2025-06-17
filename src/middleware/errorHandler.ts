import { Request,Response} from "express";

export const errorHandler = (error:any,_req:Request,res:Response) => {
    // console.log(error)
    res.status(error.status || 500).json({
        message:error.message || "Something wen wrong"
    })
}
const asyncHandler = (requestHandler) =>{
    (req,res,next) => {
        Promise.resolve(requestHandler(req,res, next)).catch((err)=>next(err))
    }
}




export {asyncHandler}

// Other way to write using try catch

// const asyncHandler = (fun) => async(req,res,next) => {
//     try {
//        await fun(req,res,next) 
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success : false,
//             message:error.message
//         })
//     }
// }
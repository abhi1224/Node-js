import User from '../models/user.js'

export const createUser = async(req, res) => {
   try{
    const user = await User.create(req.body)
    console.log("Requested data: ", req.body);
    
    res.status(201).json({
        success: true,
        statusCode: 201,
        message: 'User created successfully',
        user
    })
   }catch(error){
        return res.status(400).json({
            success: false,
            message: error.message 
        });    
   }
}
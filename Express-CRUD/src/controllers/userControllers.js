import User from '../models/userModel.js'

export const getUserController = async (req, res) => {
    try {
        const users = await User.find({});

        if (users.length === 0) {
            return res.status(404).json({
                success: false,
                statusCode: 404,
                message: 'No users found'
            });
        }

        return res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Fetched user data successfully',
            users
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            statusCode: 500,
            message: 'Error fetching users',
            error: error.message
        });
    }
};

export const addUserController = async(req, res) => {
    try{
        const {firstName, lastName, age, city} = req.body
        if(!firstName || !lastName || !age || !city){
                return res.status(400).json({
                        success: false,
                        statusCode: 400,
                        message: "All required fields must be provided"
                    });
        }
        const newUser = await User.create(req.body);
        
        return res.status(201).json({
            success: true,
            statusCode: 201,
            message: "User data inserted successfully",
            user: newUser
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            statusCode: 500,
            message: "Something went wrong while adding user",
            error: error.message
        });
    }
} 

export const getUserByIdController = async(req, res) => {
    try {
        const userId = req.params.id
        // console.log(userId);
        
        const user = await User.findById(userId)
        // console.log(user);
        
        if(!user){
            return res.status(404).json({
                success: false, 
                statusCode: 404,
                message: 'User not found'
            })
        }
        return res.status(200).json({
            susccess: true,
            statusCode: 200,
            message: 'Fetched user data successfully',
            user
        })
    } catch (error) {
        if(error.name === 'CastError'){
            return res.status(400).json({
                success: false, 
                statusCode: 400,
                message: 'Invaild user Id'
            })
        }
        return res.status(500).json({
            success: false,
            statusCode: 500,
            message: 'Something went wrong while fetching user',
            error: error.message
        })
    }
    
}

export const updateUserByIdController = async (req, res) => {
    try {
        const userId = req.params.id
        const { ...updateFields } = req.body

        if (!userId) {
            return res.status(400).json({
                success: false,
                statusCode: 400,
                message: "User ID is required"
            })
        }

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            updateFields,
            { new: true, runValidators: true }
        )

        if (!updatedUser) {
            return res.status(404).json({
                success: false,
                statusCode: 404,
                message: "User not found"
            })
        }

        return res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Updated successfully",
            data: updatedUser
        })
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            statusCode: 500,
            message: "Something went wrong",
            error: error.message
        })
    }
}

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


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
    console.log('hello from add user controller');    
} 
let users = [
    { id: 1, name: 'Abhishek' },
    { id: 2, name: 'Ankit' },
    { id: 3, name: 'Ragini' },
    { id: 4, name: 'Priyanshi' }
]

export function getUserById(req, res){
    const id = Number(req.params.id)
    const user = users.find(u => u.id === id)
    // console.log(user);    
    if(!user){
        return res.status(404).json({
            statusCode: 404,
            success: false,
            message: 'User not found'
        })
    }
    return res.status(200).json({
        statusCode: 200,
        message: 'User get successufully',
        user
    })
}

export function getUserByQuery(req, res){
    const { name, id } = req.query;

    let user;

    if (id) {
        user = users.find(u => u.id === Number(id));
    } 
    else if (name) {
        user = users.find(u => u.name === name);
    } 
    else {
        return res.status(400).json({
            success: false,
            statusCode: 400,
            message: 'Please provide name or id in query'
        });
    }

    if (!user) {
        return res.status(404).json({
            success:false,
            statusCode: 404,
            message: 'User not found'
        });
    }

    return res.status(200).json({
        statusCode: 200,
        message: 'Success',
        success: true,
        user
    });
}

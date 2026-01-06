const users = [{ id: 1, name: 'Abhishek' }];

export function getUser(req, res) {
    res.status(200).json(users);
}

export function addUser(req, res) {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({
            success: false,
            message: 'Name is required'
        });
    }

    const newUser = {
        id: users.length + 1,
        name
    };

    users.push(newUser);

    res.status(201).json({
        message: 'User added successfully',
        user: newUser
    });
}

export function getUserById (req, res){
    const id = Number(req.params.id)
    const user = users.find(u => u.id === id)

    if(!user){
        return res.status(404).json({
            success:false,
            message: 'User not found'
        })
    }
    res.status(200).json(user)

}
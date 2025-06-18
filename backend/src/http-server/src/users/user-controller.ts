import User from "./user-model";

const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Ivan" },
    { id: 3, name: "Paul" },
];

export const getUsers = async (req: any, res: any) => {
    // if (req.params.id) {
    //     return res.send(users.find((user) => user.id == req.params.id));
    // }

    let users;

    if (req.params.id) {
        users = await User.findById(req.params.id);
    } else {
        users = await User.find();
    }

    res.send(users);
};

export const createUser = async (req: any, res: any) => {
    // const user = req.body;
    // users.push(user);

    const user = User.create(req.body);

    res.send(user);
};

import Comment from "./comments-model";

export const getComments = async (req: any, res: any) => {
    // if (req.params.id) {
    //     return res.send(users.find((user) => user.id == req.params.id));
    // }

    let comments = await Comment.find().limit(1000);

    console.log("***", req.params.type);

    // if (req.params.category === "sport") {
    //     products = products.filter((product) => product.category === "sport");
    // } else if (req.params.category === "electronics") {
    //     products = products.filter(
    //         (product) => product.category === "electronics"
    //     );
    // }

    // if (req.params.name) {
    //     products = products.filter((product) =>
    //         product.name?.includes(req.params.name)
    //     );
    // }

    res.send(comments);
};

export const createComment = async (req: any, res: any) => {
    // const user = req.body;
    // users.push(user);

    const comment = await Comment.create(req.body);

    res.send(comment);
};

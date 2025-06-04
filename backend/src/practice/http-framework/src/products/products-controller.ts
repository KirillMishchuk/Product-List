import Product from "./products-model";

export const getProducts = async (req: any, res: any) => {
    // if (req.params.id) {
    //     return res.send(users.find((user) => user.id == req.params.id));
    // }

    let products = await Product.find();

    console.log("***", req.params.type);

    if (req.params.category === "sport") {
        products = products.filter((product) => product.category === "sport");
    } else if (req.params.category === "electronics") {
        products = products.filter(
            (product) => product.category === "electronics"
        );
    }

    if (req.params.name) {
        products = products.filter((product) =>
            product.name?.includes(req.params.name)
        );
    }

    res.send(products);
};

export const createProduct = async (req: any, res: any) => {
    // const user = req.body;
    // users.push(user);

    const product = await Product.create(req.body);

    res.send(product);
};

import Movie from "./movies-model";

export const getMovies = async (req: any, res: any) => {
    console.log(req.params);

    // if (req.params.id) {
    //     return res.send(users.find((user) => user.id == req.params.id));
    // }

    let movies = await Movie.find().limit(100);

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

    res.send(movies);
};

export const createMovie = async (req: any, res: any) => {
    // const user = req.body;
    // users.push(user);

    const movie = await Movie.create(req.body);

    res.send(movie);
};

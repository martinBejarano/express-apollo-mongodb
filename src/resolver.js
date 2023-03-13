import Product from "./models/products.js";

const resolvers = {
    Query: {
        getAllProducts: async () => {
            const products = await Product.find();
            return products
        },

        getProduct: async (_, args) => {
            const product = await Product.findById(args.id);
            return product;
        },


    },

    Mutation: {
        createProduct: async (parent, args, context, info) => {
            const { name, price, description } = args;
            const newProduct = new Product({ name, price, description });
            await newProduct.save();
            return newProduct;
        },

        async deleteProduct(_, args) {
            let deletedProduct = await Product.findByIdAndDelete(args.id);
            return deletedProduct;
        },

        async updateProduct(_, args) {
            let id = args.id;
            let { name, price, description } = args.Product;
            let updatedProduct = await Product.findByIdAndUpdate(id,
                {
                    name: name,
                    price: price,
                    description: description
                }, { new: true }
            );
            return updatedProduct;
        }
    }
};

export default resolvers;
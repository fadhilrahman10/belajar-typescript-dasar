import {Category, Product} from "../src/type-alias";

describe('Type Alias', () => {
    it('should support in typescript', () => {
        const category: Category = {
            id: 1,
            name: "phone",
        };

        const product: Product = {
            id: "uuid",
            name: "Iphone",
            price: 8000000,
            category: category
        };

        console.info(category);
        console.info(product);
    });
});
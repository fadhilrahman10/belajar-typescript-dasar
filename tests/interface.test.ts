import {Seller} from "../src/seller";

describe('Interface', () => {
    it('should support in typescript', () => {
        const seller: Seller = {
            id: 1,
            name: "Seller"
        };

        console.info(seller);
    });
});
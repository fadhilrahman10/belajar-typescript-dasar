import {Seller} from "../src/seller";

describe('Interface', () => {
    it('should support in typescript', () => {
        const seller: Seller = {
            id: 1,
            name: "Seller",
            nib: "123",
            npwp: "321"
        };

        console.info(seller);
    });
});
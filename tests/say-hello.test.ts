import {sayHello} from "../src/say-hello";

describe('sayHello', () => {
    it('Should return Hello World', () => {
        expect(sayHello('World')).toEqual('Hello World')
    })
});
import {Seller} from "../src/seller";
import {Employee, Manager} from "../src/employee";

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

    it('should support function interface', () => {
        interface AddFunction {
            (value1: number, value2: number): number;
        }

        const add: AddFunction = (value1: number, value2: number): number => {
            return value1 + value2;
        }

        expect(add(2, 2)).toBe(4);
    });

    it('should support indexable interface', () => {
        interface StringArray {
            [index: number]: string;
        }

        const names: StringArray = ["Jon", "Doe"];

        console.info(names);
    });

    it('should support indexable interface for non number index', () => {
        interface StringDictionary {
            [key: string]: string;
        }

        const dictionary: StringDictionary = {
            "name": "Jon",
            "address": "jl. jalan"
        };

        expect(dictionary['name']).toBe('Jon');
        expect(dictionary['address']).toBe('jl. jalan');
    })

    it('should support extends interface', () => {
        const employee: Employee = {
            id: 1,
            name: "Jon",
            division: "IT"
        };

        console.info(employee);

        const manager: Manager = {
            id: 2,
            name: "Doe",
            division: "IT",
            numberOfEmployee: 10
        }

        console.info(manager)
    });

    it('should support function in interface', () => {
        interface Person {
            name: string;
            sayHello(name: string): string;
        }

        const person: Person = {
            name: "Jon",
            sayHello(name: string): string {
                return `Hello ${name}, my name is ${this.name}`;
            }
        };

        console.info(person.sayHello("Doe"));
    });

    it('should support intersection types', () => {
        interface HasName {
            name: string;
        }

        interface HasId {
            id: number,
        }

        type Domain = HasName & HasId;

        const domain: Domain = {
            id: 1,
            name: "Jon",
        }

        console.info(domain)
    });
});
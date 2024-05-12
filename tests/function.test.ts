describe('Function', () => {
    it('should support in typescript', () => {
        function sayHello(name: string): string {
            return `Hello ${name}`;
        }

        expect(sayHello("Jon")).toBe("Hello Jon");

        function printHello(name: string): void {
            console.info(`Hello ${name}`);
        }

        printHello("Doe");
    });

    it('should support default value', () => {
        function sayHello(name: string = "Guest"): string {
            return `Hello ${name}`;
        }

        expect(sayHello()).toBe("Hello Guest");
        expect(sayHello("Jon")).toBe("Hello Jon");
    });

    it('should support rest parameter', () => {
        function sum(...values: number[]): number {
            let total = 0;
            for (const value of values) {
                total += value;
            }

            return total;
        }

        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    });

    it('should support optional parameter', () => {
        function sayHello(firstName: string, lastName?: string): string {
            let say: string = `Hello ${firstName}`;

            if (lastName) {
                say += ' ' + lastName;
            }

            return say;
        }

        expect(sayHello("Jon")).toBe("Hello Jon");
        expect(sayHello("Jon", "Doe")).toBe("Hello Jon Doe");
    });

    it('should support function overloading', () => {
        function callMe(value: number): number;
        function callMe(value: string): string;
        function callMe(value: any): any {
            if (typeof value === 'string') {
                return value.toUpperCase();
            } else if (typeof value === 'number') {
                return value * 2;
            }
        }

        expect(callMe(10)).toBe(20);
        expect(callMe("Uppercase")).toBe("UPPERCASE");
    });
});
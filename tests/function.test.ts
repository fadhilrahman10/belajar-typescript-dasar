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
});
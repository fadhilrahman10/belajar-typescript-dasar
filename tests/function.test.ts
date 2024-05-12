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
});
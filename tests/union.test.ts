describe('Union', () => {
    it('should support in typescript', () => {
        let sample: number | string | boolean = "Hei";
        console.info(sample);

        sample = 10;
        console.info(sample);

        sample = false;
        console.info(sample);
    });

    it('should support typeof operator', () => {
        function process(value: number | string | boolean) {
            if (typeof value === "string") {
                return value.toUpperCase();
            } else if (typeof value === "number") {
                return value + 2;
            } else {
                return !value;
            }
        }

        expect(process("Hello")).toBe("HELLO");
        expect(process(10)).toBe(12);
        expect(process(true)).toBe(false);
    });
});
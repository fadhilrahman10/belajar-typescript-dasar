describe('If Statement', () => {
    it('should support in typescript', () => {
        const exValue: number = 100;

        if (exValue > 80) {
            console.info("GOOD");
        } else if (exValue > 60) {
            console.info("Not Bad");
        } else {
            console.info("Try Again");
        }
    });

    it('should support ternary operator', () => {
        const value = 80;

        const say = value >= 75 ? "Congratulations" : "Try Again";
        console.info(say);
    });

    it('should support switch statement', () => {
        function sayHello(value: string): string {
            switch (value) {
                case "Jon":
                    return "Hello Jon";
                case "Doe":
                    return "Hello Doe";
                default :
                    return "Hello";
            }
        }

        console.info(sayHello("Jon"));
        console.info(sayHello("Doe"));
        console.info(sayHello("Lauren"));
    });
});
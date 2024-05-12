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
});
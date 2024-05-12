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
});
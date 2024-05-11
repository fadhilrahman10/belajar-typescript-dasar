describe('Array', () => {
    it('Should return an array', () => {
        const names: string[] = ['a', 'b', 'c'];
        const values: number[] = [1, 2, 3, 4, 5];

        console.info(names);
        console.info(values)
    })

    it('Should support read only array', () => {
        const hobbies: ReadonlyArray<string> = ["reading", "watching"];

        console.info(hobbies);
        console.info(hobbies[0]);
        console.info(hobbies[1]);

        // error jika ingin mengubah data array dengan type readonly
        // hobbies[0] = "badminton";
    })
});
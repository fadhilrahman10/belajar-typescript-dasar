describe('object', () => {
    it('should support in typescript', () => {
        const person: {name: string; age: number} = {
            name: "jon",
            age: 50
        };

        console.info(person);

        person.name = "Doe";
        person.age = 30;

        console.info(person);
    });
})
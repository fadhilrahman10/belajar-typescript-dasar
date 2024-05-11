describe('Data Type', () => {
    it('Should must declare', () => {
        let name: string = "Fadhil Rahman";
        let balance: number = 10;
        let isVip: boolean = true;

        console.log(name);
        console.log(balance);
        console.log(isVip);

        /*
        * Note
        *
        * Error typescript kadang sering tidak terjadi di unit test,
        * di karenakan babel secara otomatis menghapus kode typescript nya menjadi javascript.
        *
        * */
        // name = 10;
        // balance = "20";
        // isVip = "10";
    })
})
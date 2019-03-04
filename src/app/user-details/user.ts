export class User {

    constructor(private userId?: number, private userName?: string, private age?: number,
        private userAddress?: string, private userCountry?: string,
        private userCity?: string) {
        this.userId = userId;
        this.age = age;
        this.userName = userName;
        this.userAddress = userAddress;
        this.userCountry = userCountry;
        this.userCity = userCity;
    }
}

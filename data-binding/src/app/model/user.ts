export class User {
    name: string;
    email: string;
    phone: number;
    password: string;
    isSubscribed: boolean;
    country: number;
    gender: string;
    city: string;
    zip: string;
    state: string;

    constructor(
        city: string,
        zip: string,
        state: string,
        name: string,
        email: string,
        phone: number,
        password: string,
        country: number,
        gender: string,
        isSubscribed: boolean,

    ) {
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.country = country;
        this.gender = gender
        this.isSubscribed = isSubscribed;

    }
}
export class UserModel {
    name: string;
    email: string;
    phone: number;
    isSubscribed: boolean;
    country: number;
    gender: string;
    city: string;
    zip: string;
    state: string;

    constructor(
        name: string,
        email: string,
        phone: number,
        country: number,
        gender: string,
        isSubscribed: boolean,
    ) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.country = country;
        this.gender = gender
        this.isSubscribed = isSubscribed;
    }
}

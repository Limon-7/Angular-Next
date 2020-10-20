export interface Registration {
    name: string;
    account: {
        email: string;
        confirm: string;
    }
}
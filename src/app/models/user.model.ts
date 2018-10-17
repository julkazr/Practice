export class User {
    id: string;
    name: string;
    email: string;
    username: string;
    password: string;
    status: UserStatus;

    constructor() {}
}

export enum UserStatus {
    Online = 'online',
    Offline = 'offline'
}
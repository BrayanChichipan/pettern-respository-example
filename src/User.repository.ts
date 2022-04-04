import Database, { UserRequestDto } from './Database'
import { IUser } from './Database';

// NOTE: Make db public instead of private. This is required for the tests.
export class UserRepository {

    public db = Database;

    constructor(){}

    createUser(user: UserRequestDto): Promise<IUser>{
        return this.db.create(user);
    }

    getUsers(): Promise<IUser[]>{
        return this.db.all();
    }

    delete(): void{
        return this.db.clear();
    }

}

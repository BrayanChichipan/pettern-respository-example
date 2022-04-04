import { UserRequestDto, IUser } from './Database';
import { UserRepository } from './User.repository'

// NOTE: Make userRepo public and not private. This is required for the tests!
export class UserService {

    public userRepo;

    constructor(userRepo: UserRepository){
        this.userRepo = userRepo;
    }

    getAll(): Promise<IUser[]>{
        return this.userRepo.getUsers();
    }

    createUser(user: UserRequestDto): Promise<IUser>{
        return this.userRepo.createUser(user); 
    }

    deleteAll(){
        this.userRepo.delete();
    }


}

import { UserRequestDto, IUser } from './Database';
import { UserService } from './User.service'

// NOTE: Make userService public and not private. This is required for the tests!
export class UserController {

    public userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    getUsers(){
        return this.userService.getAll();
    }

    store(user: UserRequestDto):Promise<IUser>{
        return this.userService.createUser(user);
    }

    deleteAll(){
        this.userService.deleteAll();
    }

}

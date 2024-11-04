import {Observable, of} from "rxjs";
import {User} from "./user.model";
import uuid4 from "uuid4";

export class UserService {
    constructor() {
    }

    public getUsers(): Observable<Array<User>> {
        const user1 = new User(uuid4(), "Madalin");
        const user2 = new User(uuid4(), "Aura");
        const user3 = new User(uuid4(), "Radu");
        const user4 = new User(uuid4(), "Mara");
        debugger;
        return of([user1, user2, user3, user4]);
    }
}

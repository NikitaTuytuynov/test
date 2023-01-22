import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
import { User, Message } from "../../interfaces"
import { json } from "body-parser";

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    constructor(private http: HttpClient) {
    }

    fetch(): Observable<User[]>{ 
       return this.http.get<[]>('/api')
    }

    delete(id: string): Observable<Message>{
        return this.http.delete<Message>('api')
    }

    create(form: User): Observable<any>{
        // const fd = json()
        // fd.append('profileImage' , profileImage)
        // fd.append('firstName', firstName)
        // fd.append('lastName', lastName)
        // fd.append('email', email)
        // fd.append('hobbies', hobbies)
        // fd.append('country', country)
        return this.http.post('http://localhost:5000/api/', form)
    }


}
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
        return this.http.delete<Message>(`api/${id}`)
    }

    create(form: User): Observable<any>{
        return this.http.post('http://localhost:5000/api/', form)
    }

    getById(id: string): Observable<User>{
        return this.http.get<User>(`/${id}`)
    }

}
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"

@Injectable({
    providedIn: 'root'
})
export class PositionsServise {
    constructor(private http:HttpClient){
        
    }

    
}
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class DataSharedService {

    private _currentNumber = new Subject<any>();

    currentNumber$ = this._currentNumber.asObservable();

    public setCurrentNumber(n: any){
        this._currentNumber.next(n);
    }

}
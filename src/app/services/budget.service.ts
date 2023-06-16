import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


const URL = 'http://localhost:3000/budget/';

export interface BudgetItem {
  id?: number;
  label: string;
  amount: number;
}

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  budgetChanged: Subject<BudgetItem[]>

  constructor(private http: HttpClient) {
    this.budgetChanged = new Subject<BudgetItem[]>();
  }

  loadItems() {
    this.http.get(URL).subscribe(
      (response: any) => {
        this.budgetChanged.next(response);
      }
    );
  }

  addItem(data: BudgetItem) {
    this.http.post(URL, data).subscribe(
      (response: any) => {
        this.loadItems();
      }
    );
  }

  removeItem(id: number) {
    this.http.delete(URL + id).subscribe(() => this.loadItems());
  }

  updateItem(data: BudgetItem) {
    console.log(data);
    this.http.put(URL + data.id, data).subscribe(() => this.loadItems());
  }
}

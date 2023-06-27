import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

export class Quotation {
  key?: string | null;
  currencyName?: string;
  value?: number;

  isValid() {
    return this.value && this.currencyName;
  }
}

@Injectable({
  providedIn: 'root'
})
export class QuotationService {

  private collectionPath = '/quotations';
  private quotationRef!: AngularFireList<Quotation>;

  constructor(private db: AngularFireDatabase) {
    this.quotationRef = this.db.list(this.collectionPath);
  }

  getAll(): AngularFireList<Quotation> {
    return this.quotationRef;
  }

  create(data: Quotation): any {
    return this.quotationRef.push(data);
  }

  update(key: string, data: any): Promise<void> {
    return this.quotationRef.update(key, data);
  }

  delete(key: string): Promise<void> {
    return this.quotationRef.remove(key);
  }
}

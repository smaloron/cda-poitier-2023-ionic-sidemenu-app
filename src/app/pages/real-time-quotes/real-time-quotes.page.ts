import { Component, OnInit } from '@angular/core';
import { QuotationService, Quotation } from 'src/app/services/quotation.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-real-time-quotes',
  templateUrl: './real-time-quotes.page.html',
  styleUrls: ['./real-time-quotes.page.scss'],
})
export class RealTimeQuotesPage implements OnInit {

  quote: Quotation = new Quotation();
  quoteList: any[] = [];

  constructor(private quoteService: QuotationService) { }

  ngOnInit() {
    this.quoteService.getAll().snapshotChanges().
      pipe(
        map(
          (changes: any) => {
            return changes.map((item: any) => {
              return { key: item.payload.key, ...item.payload.val() };
            })
          }
        )
      )
      .subscribe(
        (data) => this.quoteList = data
      )
  }

  saveQuote() {
    if (this.quote.isValid()) {
      let operation: any;
      if (this.quote.key) {
        operation = this.quoteService.update(
          this.quote.key,
          { currencyName: this.quote.currencyName, value: this.quote.value }
        );
      } else {
        operation = this.quoteService.create(this.quote);
      }

      operation.then(() => {
        this.quote = new Quotation();
      });

    }
  }

  setQuote(data: any) {
    this.quote = new Quotation();
    this.quote.key = data.key;
    this.quote.currencyName = data.currencyName;
    this.quote.value = data.value;
  }

  deleteQuote(key: string) {
    this.quoteService.delete(key);
  }

}

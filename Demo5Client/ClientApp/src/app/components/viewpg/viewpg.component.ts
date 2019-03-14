import { Component, OnInit } from '@angular/core';
import { QuotesService, Quote } from '../../services/quotes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-viewpg',
  templateUrl: './viewpg.component.html',
  styleUrls: ['./viewpg.component.css']
})
export class ViewpgComponent implements OnInit {

  quoteData: Quote;
  allQuotes: Observable<Quote[]>;

  constructor(
    private quoteService: QuotesService,
  ) { }

  ngOnInit() {
    this.quoteService.getAllQuotes().subscribe(
      (data: any) => {
        this.allQuotes = data;
      }
    )
  }

}

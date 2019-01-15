import { Component, OnInit } from '@angular/core';
import { ABook } from '../../agree-book';
import { BooksService } from '../../service/books.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-search-answer',
  templateUrl: './search-answer.component.html',
  styleUrls: ['./search-answer.component.css']
})
export class SearchAnswerComponent implements OnInit {

  selectedBook : ABook;
  bid: string;
  bname: string;
  number: string;
  book: ABook;
  books: ABook[];
  stime:string;

 constructor(private booksService: BooksService) { }
  onSubmit() {
    this.booksService.getAnswer(this.bname).then(res => {
      console.log(res);
      this.books = res;
    });
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  ngOnInit() {
  }
}

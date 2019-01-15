import { Component, OnInit } from '@angular/core';
import { Book } from '../../book';
import { BooksService } from '../../service/books.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  books: Book[];
  selectedBook: Book;
  tip: string;
  constructor(
    private booksService: BooksService,
    private router: Router) {  }

    getBooks(): void {
      this.booksService
          .getBooks()
          .then(books => this.books = books);
          }

  delete(id: number): void {
      if (!id) {
        this.tip = '拒绝失败，请检查输入ID';
        return;
      }
      this.tip = '拒绝成功';
      this.booksService.deleteBookById(id)
        .then(books => {
          this.selectedBook = null;
      });
  }      

  ngOnInit() {
    this.getBooks();
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
    this.gotoDetail();
  }

  gotoDetail(): void {
    this.router.navigate(['/books', this.selectedBook.id]);
  }

}


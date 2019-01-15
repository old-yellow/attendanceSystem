import { Component, OnInit } from '@angular/core';
import { Book } from '../../book';
import { BooksService } from '../../service/books.service';
import { Router } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { stringify } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {
  
  selectedBook : Book;
  bid: string;
  bname: string;
  number: string;
  book: Book;
  books: Book[];
  stime:string;

 constructor(private booksService: BooksService) { }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }
  onSubmit() {
    this.book = {
      id: 1,
      bid: "12",
      bname: "张0",
      stime:"2016/12/12",
      number:"一天",
    };
    this.book.bid = this.bid;
    this.book.bname = this.bname;
    this.book.number = this.number;
    this.book.stime = this.stime;
    this.booksService.getBooksByConstraint(this.book).then(res => {
      console.log(res);
      this.books = res;
    });
    this.book.bid = undefined;
    this.book.bname = undefined;
    this.book.number = undefined;
    this.bid = undefined;
    this.bname = undefined;
    this.number = undefined;
    this.book.stime = undefined;
  }



  tip: string;
  borrowDate: string;
  returnDate: string;
  realReDate: string;
  date: Date;
  tempYear: number;
  tempMonth: number;
  tempDay: number;
  realMonth: string;

  // toBorrow() {
  //   this.returnWithMessage(this.bid);
  // }

  // returnWithMessage(book_id: string): Promise<Book> {
  //   return this.booksService.getBookBybid(book_id)
  //     .then(bookBorrowed => {
  //       const that = this;
  //       const auth = new Book();
  //       if (book_id === undefined) {
  //         this.tip = '请根据查询信息输入图书编号';
  //         setTimeout(function () {
  //           that.tip = null;
  //         }, 1000);
  //       } else {
  //         this.tempPeople = JSON.parse(sessionStorage.getItem('usr'));
  //         this.booksService.getBookBybid(book_id).then(books => {
  //           if (books.valueOf().toString() === '') {
  //             that.tip = '书库里没有这本书';
  //             setTimeout(function () {
  //               that.tip = null;
  //             }, 1000);
  //           } else if(bookBorrowed[0].number <= 0){
  //             that.tip = '这本书已被他人借阅，暂无该书';
  //             setTimeout(function () {
  //               that.tip = null;
  //             }, 1000);
  //           }else {
  //             that.tip = '借书成功';
  //             setTimeout(function () {
  //               that.tip = null;
  //             }, 1000);
  //             bookBorrowed[0].number -= 1;
  //             this.booksService.updateNumber(bookBorrowed[0]).then(res => res);
  //             this.tempPeople.count += 1;
  //             this.peopleService.updateCount(this.tempPeople).then(res => {
  //               console.log(res);
  //               sessionStorage.setItem('usr', JSON.stringify(this.tempPeople));
  //               return res;
  //             });
  //             const formatDate = ( time: any ) => {
  //               // 格式化日期，获取今天的日期
  //               const Dates = new Date( time );
  //               const year: number = Dates.getFullYear();
  //               const month: any = ( Dates.getMonth() + 1 ) < 10 ? '0' + ( Dates.getMonth() + 1 ) : ( Dates.getMonth() + 1 );
  //               const day: any = Dates.getDate() < 10 ? '0' + Dates.getDate() : Dates.getDate();
  //               return year + '-' + month + '-' + day;
  //             };
  //             this.borrowDate = formatDate(this.date);
  //             const afterThirty = ( time: any ) => {
  //               // 格式化日期，获取30天后日期
  //               const Dates = new Date( time );
  //               const year: number = Dates.getFullYear();
  //               const month: any = ( Dates.getMonth() + 1 ) < 10 ? '0' + ( Dates.getMonth() + 1 ) : ( Dates.getMonth() + 1 );
  //               const day: any = Dates.getDate() < 10 ? '0' + Dates.getDate() : Dates.getDate();
  //               this.tempYear = year;
  //               this.tempMonth = month;
  //               this.tempDay = day;
  //               if(this.tempMonth === 12){
  //                 this.tempMonth = 1;
  //                 this.tempYear += 1;
  //               }else{
  //                 this.tempMonth += 1;
  //               }

  //               if(this.tempMonth < 10){
  //                 this.realMonth = '0' + this.tempMonth;
  //               }
  //               return this.tempYear + '-' + this.realMonth + '-' + this.tempDay;
  //             };
  //             this.returnDate = afterThirty(this.date);
  //             this.realReDate = "未还";
  //             this.recordsService.createRecordByAll(book_id,this.tempPeople.pid,this.borrowDate,this.returnDate,this.realReDate);

  //             return books;
  //           }
  //         });
  //       }
  //       return auth;
  //     })
  //     .catch(this.handleError);
  // }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  ngOnInit() {
    this.date = new Date();
    this.booksService.getBooks().then(res => {
      this.books = res;
    });
  }
}

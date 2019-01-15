import { Component, OnInit } from '@angular/core';
import { Book } from '../../book';
import { BooksService } from '../../service/books.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-submit-request',
  templateUrl: './submit-request.component.html',
  styleUrls: ['./submit-request.component.css']
})
export class SubmitRequestComponent implements OnInit {

  books: Book[];
  tip: string;
  constructor(
    private booksService: BooksService,
    private router: Router) { }

    getBooks(): void {
    this.booksService
        .getBooks()
        .then(books => this.books = books);
        }

  add(id: number, bid: string,  bname: string, stime:string, number:string): void {
    bid = bid.trim();
    bname = bname.trim();
    stime = stime.trim();
    number = stime.trim();
    if(!id){
      this.tip = '编号不能为空，请检查后重新输入！';
      console.log("编号不能为空，请检查后重新输入！");
      return;
    }
    if (!bid){
      this.tip = '请假编号不能为空，请检查后重新输入！';
      console.log("请假编号不能为空，请检查后重新输入！");
      return;
    }
    if (!bname){
      this.tip = '名称不能为空，请检查后重新输入！';
      console.log("名称不能为空，请检查后重新输入！");
      return;
    }
    if (!stime){
      this.tip = '请假时间不能为空，请检查后重新输入！';
      console.log("请假时间不能为空，请检查后重新输入！");
      return;
    }
    if(!number){
      this.tip = '请假天数不能为空，请检查后重新输入！';
      console.log("请假天数不能为空，请检查后重新输入！");
      return;
    }
    this.tip = '提交成功！';
    this.booksService.createBook(id, bid,bname,stime,number)
      .then(books => {
        this.books.push(books);
      });
  }

  ngOnInit(): void {
    this.getBooks();
  }
}

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ApiService } from './api.service';
import {Book} from '../book';
import {ABook} from '../agree-book';
import {resolve} from 'url';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {el} from '@angular/platform-browser/testing/src/browser_util';


@Injectable({
  providedIn: 'root'
})

export class BooksService {

  private api_url ;
  private api_url1;
  private headers ;

  constructor(private http: Http, private apiService: ApiService) {
    this.api_url = apiService.getUrl() + '/books';
    this.api_url1 = apiService.getUrl() + '/agree-books';
    this.headers = apiService.getHeaders();
  }

  getBooks(): Promise<Book[]> {
    const url = `${this.api_url}`;
    return this.http.get(url, {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Book[])
      .catch(this.handleError);
  }

  getBooksByConstraint(book: Book): Promise<Book[]> {
    let url = `${this.api_url}?`;
    console.log(book);
    if (book.bid !== undefined) {
      if (book.bname !== undefined) {
        if (book.number !== undefined) {
          url = `${this.api_url}?bid=${book.bid}&bname=${book.bname}&starttime=${book.stime}`;
        } else {
          url = `${this.api_url}?bid=${book.bid}&bname=${book.bname}`;
        }
      } else {
        if (book.number !== undefined) {
          url = `${this.api_url}?bid=${book.bid}&number=${book.number}`;
        } else {
          url = `${this.api_url}?bid=${book.bid}`;
          console.log(url);
        }
      }
    } else {
      if (book.bname !== undefined) {
        if (book.number !== undefined) {
          url = `${this.api_url}?bname=${book.bname}&number=${book.number}`;
        } else {
          url = `${this.api_url}?bname=${book.bname}`;
        }
      } else {
        if (book.number !== undefined) {
          url = `${this.api_url}?number=${book.number}`;
        } else {
          url = `${this.api_url}`;
          console.log(url);
        }
      }
    }
    return this.http.get(url, {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Book[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getBookByAny(bid: string, bname: string): Promise<Book> {
    const url = `${this.api_url}/${bid}`;
    return this.http.get(url, {headers: this.headers})
        .toPromise()
        .then(res => res.json() as Book)
        .catch(this.handleError);
  }

  getBookBybid(bid: string): Promise<Book> {
    const url = `${this.api_url}?bid=${bid}`;
    return this.http.get(url, {headers: this.headers})
        .toPromise()
        .then(res => res.json() as Book)
        .catch(this.handleError);
  }
  // 按id删除
  deleteBookById(bid: number): Promise<Book> {
    const url = `${this.api_url}/${bid}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then((res => res.json() as Book))
      .catch(this.handleError);
  }

   // 根据所有属性新增同意
   createBookByAll(id: number, bid: string,  bname: string, stime:string, number:string): Promise<ABook> {
    const book = {
      id:id,
      bid:bid,
      bname:bname,
      stime:stime,
      number:number
    }
    console.log(id,bid,bname,stime,number);
    const url = `${this.api_url1}`;
    return this.http
      .post(url, JSON.stringify(book), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as ABook)
      .catch(this.handleError);
  }

     // 根据所有属性新增同意
     createBook(id: number, bid: string,  bname: string, stime:string, number:string): Promise<Book> {
      const book = {
        id:id,
        bid:bid,
        bname:bname,
        stime:stime,
        number:number
      }
      console.log(id,bid,bname,stime,number);
      const url = `${this.api_url}`;
      return this.http
        .post(url, JSON.stringify(book), {headers: this.headers})
        .toPromise()
        .then(res => res.json() as Book)
        .catch(this.handleError);
    }

    getAnswer(bname: string): Promise<ABook[]> {
      const url = `${this.api_url1}?bname=${bname}`;
      return this.http.get(url, {headers: this.headers})
          .toPromise()
          .then(res => res.json() as ABook[])
          .catch(this.handleError);
    }
}

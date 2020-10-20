import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchIteam } from '../_models/search.item';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpCoreService {
  apiRoot = 'https://itunes.apple.com/search';
  results: SearchIteam;
  constructor(private http: HttpClient) { }

  searchByObservable(term: string): Observable<SearchIteam> {
    const apiUrl = `${this.apiRoot}?term=${term}&media=music&limit=20`;
    return this.http.get(apiUrl).pipe(
      map(res => {
        console.log("songs:", res)
        return res['results'].map(item => {
          return new SearchIteam(
            item.trackName,
            item.artistName,
            item.trackViewUrl,
            item.artworkUrl100,
            item.artistId
          );
        });
      }));
  }

  /* use promise */
  search(term: string) {
    const promise = new Promise((resolve, reject) => {
      const apiURL = `${this.apiRoot}?term=${term}&media=music&limit=`;
      this.http
        .get(apiURL)
        .toPromise()
        .then(
          res => {
            // Success
            console.log("Promise", res);
            this.results = res['results'].map(item => {
              return new SearchIteam(
                item.trackName,
                item.artistName,
                item.trackViewUrl,
                item.artworkUrl30,
                item.artistId
              );
            });
            resolve(this.results);
          },
          msg => {
            // Error
            reject(msg);
          }
        );
    });
    return promise;
  }
  // jsonp with obserable
  searchJsonpObservable(term: string) {
    const apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
    return this.http.jsonp(apiURL, 'callback').pipe(
      map(res => {
        console.log("responese", res)
        // tslint:disable-next-line: no-string-literal
        return res['results'].map(item => {
          return new SearchIteam(
            item.trackName,
            item.artistName,
            item.trackViewUrl,
            item.artworkUrl30,
            item.artistId
          );
        });
      })
    );
  }
  /* jsonp with promise */
  searchJsonpPromise(term: string) {
    const apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
    const promise = new Promise((resolve, reject) => {
      this.http.jsonp(apiURL, 'callback').toPromise()
        .then(res => {
          // success
          // tslint:disable-next-line: no-string-literal
          this.results = res['results'].map(item => {
            return new SearchIteam(
              item.trackName,
              item.artistName,
              item.trackViewUrl,
              item.artworkUrl30,
              item.artistId
            );
          });
          resolve();
        }, msg => {
          // error section
          reject(msg);
        }
        );
    });
    return promise;
  }

}

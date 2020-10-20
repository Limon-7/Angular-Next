import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { HttpCoreService } from 'src/app/_service/http-core.service';

@Component({
  selector: 'app-core-observable',
  templateUrl: './core-observable.component.html',
  styleUrls: ['./core-observable.component.css']
})
export class CoreObservableComponent implements OnInit {

  loading = false
  results: Observable<any>
  searchField: FormControl;
  constructor(protected service: HttpCoreService, protected activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let search = ""
    this.activateRoute.params.subscribe(res => {

      search = res['term']
      console.log("Query params", res)
    })
    if (search) {
      this.searchField = new FormControl(search);
      this.results = this.service.searchByObservable(search)
      console.log("This.reasults", this.results)

    }
    this.searchField = new FormControl();
    this.results = this.searchField.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      tap(() => this.loading = true),
      switchMap(term => {
        this.router.navigate(["/http/observable", term], { queryParams: { search: term } })
        return this.service.searchByObservable(term)
      }),
      tap(() => this.loading = false)

    );
  }

  searchByObservable(term: string) {
    console.log("Searchfield", term)
    this.service.searchByObservable(term);
  }

}

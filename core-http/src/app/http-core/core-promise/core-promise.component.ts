import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HttpCoreService } from 'src/app/_service/http-core.service';

@Component({
  selector: 'app-core-promise',
  templateUrl: './core-promise.component.html',
  styleUrls: ['./core-promise.component.css']
})
export class CorePromiseComponent implements OnInit {

  term;
  loading = false;
  constructor(public searchService: HttpCoreService, protected activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(res => {
      this.term = res['term']
      if (this.term) {
        this.doSearch(this.term);
      }
    })

  }
  onSearch(url) {
    this.router.navigate(['/http/promise', url], {})
  }
  doSearch(term: string) {
    if (term) {
      this.loading = true;
      this.searchService.search(term).then((res) => {
        (this.loading = false)
        console.log("Promise-response", res)
      }).catch(err => console.log(err));
    }
  }

}

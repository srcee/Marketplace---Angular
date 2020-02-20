import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { FbActionsService } from 'src/app/core/services/fb-actions.service';


@Component({
  selector: 'app-offers-list',
  templateUrl: './buy-offers-list.component.html',
  styleUrls: ['./buy-offers-list.component.scss']
})
export class BuyOffersListComponent implements OnInit {

  itemData;
  data;
  displayedColumns: string[] = ['title', 'name', 'city', 'price', 'details'];

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private fbActionService: FbActionsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.fbActionService.getItems('buy').subscribe(x => {
      this.itemData = x;
      this.data = new MatTableDataSource(this.itemData);
      this.data.sort = this.sort;
    })

  }

  viewMore(event) {
    this.router.navigate(['details', 'buy', event.target.id]);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.data.filter = filterValue.trim().toLowerCase();
  }
}

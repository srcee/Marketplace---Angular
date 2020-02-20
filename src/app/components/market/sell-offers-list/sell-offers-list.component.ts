import { Component, OnInit, ViewChild } from '@angular/core';
import { FbActionsService } from 'src/app/core/services/fb-actions.service';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-sell-offers-list',
  templateUrl: './sell-offers-list.component.html',
  styleUrls: ['./sell-offers-list.component.scss']
})
export class SellOffersListComponent implements OnInit {

  itemData;
  data;
  displayedColumns: string[] = ['title', 'name', 'city', 'price', 'details'];


  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private router: Router,
    private fbActionService: FbActionsService
  ) { }

  ngOnInit() {
    this.fbActionService.getItems('sell').subscribe(x => {
      this.itemData = x;
      this.data = new MatTableDataSource(this.itemData);
      this.data.sort = this.sort;
    })

  }

  viewMore(event) {
    this.router.navigate(['details', 'sell', event.target.id]);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.data.filter = filterValue.trim().toLowerCase();

  }
}

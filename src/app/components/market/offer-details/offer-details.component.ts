import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FbActionsService } from 'src/app/core/services/fb-actions.service';
import { Item } from 'src/app/models/item.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteDialogComponent } from '../../shared/confirm-delete-dialog/confirm-delete-dialog.component';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.scss']
})
export class OfferDetailsComponent implements OnInit {

  itemData;
  showInfo: boolean = false;
  itemId: string;
  type: string;
  isAuthor: boolean;

  constructor(
    private router: Router,
    private fbActionService: FbActionsService,
    private auth: AuthService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    let urlToArr = this.router.url.split('/');
    this.itemId = urlToArr.pop();
    this.type = urlToArr.pop();

    this.fbActionService.getItemInfo(this.type, this.itemId).subscribe(x => {
      this.itemData = x;
      this.isAuthor = this.itemData.uid === this.auth.userUid;
    })
  }
  showInfoHandler() {
    this.showInfo = !this.showInfo;
  }
  editOffer() {
    this.router.navigate(['edit', this.type, this.itemId])
  }
  deleteHandler() {
    const popUp = this.dialog.open(ConfirmDeleteDialogComponent);

    popUp.afterClosed().subscribe(result => {
      if (result) {
        this.fbActionService.deleteOffer(this.type, this.itemId);
      }
    });
  }
}

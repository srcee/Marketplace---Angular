import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { FbActionsService } from 'src/app/core/services/fb-actions.service';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.component.html',
  styleUrls: ['./edit-offer.component.scss']
})
export class EditOfferComponent implements OnInit {

  itemId: string;
  type: string;
  itemData;

  public editOfferForm: FormGroup;

  constructor(
    private router: Router,
    private fbActionService: FbActionsService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    let urlToArr = this.router.url.split('/');
    this.itemId = urlToArr.pop();
    this.type = urlToArr.pop();

    this.fbActionService.getItemInfo(this.type, this.itemId).subscribe(x => {
      this.itemData = x;

      let title = new FormControl(this.itemData.title, [Validators.required]);
      let imgUrl = new FormControl(this.itemData.imgUrl, [Validators.required]);
      let city = new FormControl(this.itemData.city, [Validators.required]);
      let price = new FormControl(this.itemData.price, [Validators.required]);
      let info = new FormControl(this.itemData.info, [Validators.required, Validators.minLength(10)]);

      this.editOfferForm = new FormGroup({
        title: title,
        imgUrl: imgUrl,
        city: city,
        price: price,
        info: info
      })
    })
  }

  editHandler(data) {
    this.fbActionService.postEditOffer(this.type, this.itemId, data.value)
  }
}

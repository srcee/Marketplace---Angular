import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FbActionsService } from 'src/app/core/services/fb-actions.service';

@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.scss']
})
export class CreateOfferComponent implements OnInit {

  constructor(private fbService: FbActionsService) { }

  ngOnInit() {
  }
  createHandler(createForm: NgForm) {
    this.fbService.postNewOffer(createForm.value);
  }
}

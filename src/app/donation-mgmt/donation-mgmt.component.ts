import { Component, OnInit } from '@angular/core';
import { DonateService } from './../donateservice';
@Component({
  selector: 'app-donation-mgmt',
  templateUrl: './donation-mgmt.component.html',
  styleUrls: ['./donation-mgmt.component.css']
})
export class DonationmgmtComponent implements OnInit {
  public donate = [];
  constructor(private _donateService: DonateService) { }

  ngOnInit() {
    this._donateService.getdonation().subscribe(
      (data) => this.donate = data
    );
  }

}

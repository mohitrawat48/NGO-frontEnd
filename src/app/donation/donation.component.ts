import { Component, OnInit } from '@angular/core';

import { Donation } from '../entities/donation.entity';
import { DonationService } from '../donation.service';

@Component({
	templateUrl: 'donation.component.html',
	styleUrls: ['./donation.component.css']
})

export class DonationComponent implements OnInit {

	private donationtype: Donation[];

	constructor(
		private donationService: DonationService
	) { }

	ngOnInit() {
		this.donationtype = this.donationService.findAll();
	}


}
import { Injectable } from "@angular/core";

import { Donation } from "./entities/donation.entity";

@Injectable()
export class DonationService {
  private donationtype: Donation[];

  constructor() {
    this.donationtype = [
      {
        id: "d1",
        name: "General Donation Fund",
        amount: 90,
        photo: "photo1.jpg"
      },
      { id: "d2", name: "Run For The Son", amount: 100, photo: "photo2.jpg" },
      {
        id: "d3",
        name: "Mission Trip Sponsorship",
        amount: 70,
        photo: "photo3.jpg"
      },
      { id: "d4", name: "Memorial Gift", amount: 120, photo: "photo4.jpg" }
    ];
  }

  findAll(): Donation[] {
    return this.donationtype;
  }

  find(id: string): Donation {
    return this.donationtype[this.getSelectedIndex(id)];
  }

  private getSelectedIndex(id: string) {
    for (var i = 0; i < this.donationtype.length; i++) {
      if (this.donationtype[i].id == id) {
        return i;
      }
    }
    return -1;
  }
}

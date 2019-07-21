import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Item } from "../entities/item.entity";
import { DonationService } from "../donation.service";
import { DonateService } from "../donateservice";
import { PassUserInfoService } from "../pass-user-info.service";
import { Router } from "@angular/router";

@Component({
  templateUrl: "user-cart.component.html",
  styleUrls: ["./user-cart.component.css"]
})
export class UserCartComponent implements OnInit {
  public items: Item[] = [];
  public user_info: any;
  public donation_data: any = {};
  private total: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private donationService: DonationService,
    private userinfoservice: PassUserInfoService,
    private _donateService: DonateService,
    private router: Router
  ) {}

  ngOnInit() {
    //load user info
    this.user_info = this.userinfoservice.fetch_data();

    this.activatedRoute.params.subscribe(params => {
      var id = params["id"];
      if (id) {
        var item: Item = {
          donation: this.donationService.find(id),
          quantity: 1
        };
        if (localStorage.getItem("cart") == null) {
          let cart: any = [];
          cart.push(JSON.stringify(item));
          localStorage.setItem("cart", JSON.stringify(cart));
        } else {
          let cart: any = JSON.parse(localStorage.getItem("cart"));
          let index: number = -1;
          for (var i = 0; i < cart.length; i++) {
            let item: Item = JSON.parse(cart[i]);
            if (item.donation.id == id) {
              index = i;
              break;
            }
          }
          if (index == -1) {
            cart.push(JSON.stringify(item));
            localStorage.setItem("cart", JSON.stringify(cart));
          } else {
            let item: Item = JSON.parse(cart[index]);
            item.quantity += 1;
            cart[index] = JSON.stringify(item);
            localStorage.setItem("cart", JSON.stringify(cart));
          }
        }
        this.loadCart();
      } else {
        this.loadCart();
      }
    });
  }

  loadCart(): void {
    this.total = 0;
    this.items = [];
    let cart = JSON.parse(localStorage.getItem("cart"));
    for (var i = 0; i < cart.length; i++) {
      let item = JSON.parse(cart[i]);
      this.items.push({
        donation: item.donation,
        quantity: item.quantity
      });
      this.total += item.donation.amount * item.quantity;
    }
  }

  remove(id: string): void {
    let cart: any = JSON.parse(localStorage.getItem("cart"));
    let index: number = -1;
    for (var i = 0; i < cart.length; i++) {
      let item: Item = JSON.parse(cart[i]);
      if (item.donation.id == id) {
        cart.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    this.loadCart();
  }

  confirm_donation() {
    this.donation_data["Name"] = this.user_info["user_full_name"];
    this.donation_data["Amount"] = this.total;
    this.donation_data["Date"] = new Date().toDateString();
    this._donateService
      .post_donation(this.donation_data)
      .subscribe(data => console.log(data), error => console.log(error));

    this.router.navigate(["../order_confirm"], {
      relativeTo: this.activatedRoute
    });
  }
}

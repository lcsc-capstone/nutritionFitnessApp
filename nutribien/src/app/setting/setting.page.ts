import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  public phone: any;
  public email: any;
  public password: any;
  public height: any;
  public idnum: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router) {
      this.route.queryParams.subscribe(params => {
        this.idnum = params["idnum"];
        this.phone = params["phone"];
        this.email = params["email"];
        this.password = params["password"];
        this.height = params["height"];
    });
     }

  ngOnInit() {
  }

}

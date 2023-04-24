import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Userinfo } from 'src/app/userinfo/userinfo';
import { UserinfoService } from 'src/app/userinfo/userinfo.service';
// import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'profile-nav',
  templateUrl: './profile-nav.component.html',
  styleUrls: ['./profile-nav.component.css']
})
export class ProfileNavComponent implements OnInit {

    userinfo: Observable<Userinfo> | undefined;

    constructor(
        private service: UserinfoService
    ) { }

    ngOnInit(): void {
        this.intialializeUserOptions()
    }

    private intialializeUserOptions(): void {
        this.userinfo = this.service.getUserinfo()
    }

    // logout(): void {
    //     // this.keycloakService.logout('http://localhost:4200/welcome')
    // }

    // login(): void {
        
    // }

}
import { OnInit, Component } from "@angular/core";
import { Router, NavigationEnd } from '@angular/router'

@Component({
    selector: 'home-component-selector',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
  })
  export class HomeComponent implements OnInit {
  
    // currentUrl: string;
  
    // constructor(private _router: Router) { 
    //   _router.events.subscribe((_: NavigationEnd) =>this.currentUrl = _.url)
    // }

    public pageTitle: string = 'Dobro došli!';
  
    ngOnInit() {
    }
  
  }
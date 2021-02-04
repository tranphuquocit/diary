import { Route } from '@angular/compiler/src/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'diary';
  constructor(
    private deviceService: DeviceDetectorService,
    private route: Router
  ) {
    if(this.deviceService.isDesktop()) {
      this.route.navigate(['']);
      console.log('Đây là Web: ', this.deviceService.isDesktop());
    }else if(this.deviceService.isMobile()) {
      this.route.navigate(['/m']);
      console.log('Đây là Mobile: ', this.deviceService.isMobile());
    } else if (this.deviceService.isTablet()) {
      this.route.navigate(['/t']);
      console.log('Đây là Tablel: ', this.deviceService.isTablet());
    }
  }
}

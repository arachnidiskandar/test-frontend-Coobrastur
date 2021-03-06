import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-coobrastur';

  constructor(private authService: AuthService) {}

  get isLogged(): boolean {
    return this.authService.logado;
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { WindowMaximizeIcon } from 'primeng/icons/windowmaximize';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LogoComponent, UserComponent],
  exports: [HeaderComponent, FooterComponent],
  imports: [CommonModule, ButtonModule, WindowMaximizeIcon],
})
export class CoreModule {}

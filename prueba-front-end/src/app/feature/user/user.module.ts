import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserService } from './services/user.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserComponent } from './components/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormUserComponent } from './components/form-user/form-user.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [UserComponent, FormUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [UserService],
})
export class UserModule {}

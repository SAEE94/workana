import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user.model';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { FormUserComponent } from '../form-user/form-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, OnDestroy {
  dataSource: User[] = [];

  private subscription = new Subscription();

  displayedColumns: string[] = ['id', 'name', 'surname', 'age', 'actions'];
  constructor(private userService: UserService, public dialog: MatDialog) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.listar();
  }

  public openDialog(user?: User): void {
    const dialogRef = this.dialog.open(FormUserComponent, {
      width: '40%',
      data: user
    });

    dialogRef.afterClosed().subscribe((result) => {
      let sub = null;
      if (!result.id) {
        sub = this.userService.save(result).subscribe((resp) => this.listar());
      } else {
        sub = this.userService
          .update(result)
          .subscribe((resp) => this.listar());
      }
      this.subscription.add(sub);
    });
  }

  private listar() {
    const sub = this.userService
      .findAll()
      .subscribe((resp) => (this.dataSource = resp));
    this.subscription.add(sub);
  }
}

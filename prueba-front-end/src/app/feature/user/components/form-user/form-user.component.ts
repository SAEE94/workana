import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss'],
})
export class FormUserComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<FormUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    console.log( this.data )
    this.formGroup = this.formBuilder.group({
      id: this.data !== null ? this.data.id : null,
      name: new FormControl(this.data !== null ? this.data.name : null, Validators.required),
      surname: new FormControl(this.data !== null ? this.data.surname : null, Validators.required),
      age: new FormControl(this.data !== null ? this.data.age : null, [Validators.min(1), Validators.required]),
    });
  }

  public onSend() {
    this.dialogRef.close(this.formGroup.getRawValue());
  }
}

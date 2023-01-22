import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { materialize, Observable } from 'rxjs';
import { __values } from 'tslib';
import { MaterialService, MeterialInstance } from '../shared/classes/material.service';
import { User } from '../shared/interfaces';
import { UsersService } from '../shared/services/user.servise.ts/users.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('modal')
  modalRef!: ElementRef;
  users$!: Observable<User[]>
  modal!: MeterialInstance
  form = new FormGroup({
    profileImage: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    hobbies: new FormControl(''),
    country: new FormControl(''),
  })


  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.users$ = this.usersService.fetch()
  }

  ngOnDestroy() {
    if (this.modal && this.modal.destroy) this.modal.destroy()
  }

  ngAfterViewInit() {
    this.modal = MaterialService.initModal(this.modalRef)
  }

  onDeleteUser(position?: string) {
    if(!position) return
    this.usersService.delete(position).subscribe(
      () => {
        MaterialService.toast('Sucsess')
        this.users$ = this.usersService.fetch()
      }
    )
  }

  onAddPosition() {
    if (this.modal && this.modal.open) this.modal.open()
  }
  onCancel() {
    if (this.modal && this.modal.close) this.modal.close()
    this.form.reset()
  }

  onSubmit() {
    this.form.disable()
    const newUser: User = {
      profileImage: this.form.get('profileImage')?.value,
      firstName: this.form.get('firstName')?.value,
      lastName: this.form.get('lastName')?.value,
      email: this.form.get('email')?.value,
      hobbies: this.form.get('hobbies')?.value,
      country: this.form.get('country')?.value,
    }
    let obs$
    obs$ = this.usersService.create(newUser)
    obs$.subscribe(
      user => {
        MaterialService.toast('Success')
        this.onCancel()
        this.form.reset()
        this.form.enable()
        this.users$ = this.usersService.fetch()
      }
    )
  }
}


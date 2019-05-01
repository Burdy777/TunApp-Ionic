import { Component, OnInit } from '@angular/core';
import { Tun } from '../model/login';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
tunForm: FormGroup;
tunList: Array<Tun> = [];

constructor(public fb: FormBuilder) { }

ngOnInit() {
  this.tunForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(20)]],
    price: ['', [Validators.min(2)]]
  });
 }

 addTun() {
   if (this.tunForm.valid) {
      this.tunList.push(this.tunForm.value);
   }
 }



}

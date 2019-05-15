import { Component, OnInit } from '@angular/core';
import { Tun } from '../model/login';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { PlatformService } from '../services/platform-service.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
get name() { return this.tunForm.get('name'); }
get price() { return this.tunForm.get('price'); }

tunForm: FormGroup;
tunList: Array<Tun> = [];


constructor(public fb: FormBuilder, public nativeStorage: NativeStorage, public platformService: PlatformService) { }

ngOnInit() {
  this.updateTun();
  this.tunForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(20)]],
    price: ['', [Validators.required]]
  });
 }

 updateTun() {
  if (this.platformService.isCordovaPlatform()) {
    // if cordova
  } else {
      this.tunList = JSON.parse(localStorage.getItem('tuns'));
  }
 }

 addTun() {
   if (this.tunForm.valid) {
     const newTun = this.tunForm.value;
     newTun.done = false;
     this.tunList.push(newTun);
     this.tunForm.reset();
     if (this.platformService.isCordovaPlatform()) {
         this.nativeStorage.setItem(newTun.name.toString(), newTun).then((res) => {
          console.log(this.nativeStorage.getItem(newTun.name));
      });
    } else {
      localStorage.setItem('tuns', JSON.stringify(this.tunList));
    }
   }
 }

 done(i) {
  this.tunList[i].done = !this.tunList[i].done;
 }

 delete(i, name) {
   this.tunList.splice(i, 1);
   this.platformService.isCordovaPlatform() ?
    this.nativeStorage.remove(name) :
      localStorage.setItem('tuns', JSON.stringify(this.tunList))
 }


}

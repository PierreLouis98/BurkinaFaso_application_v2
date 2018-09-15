
import { Component } from '@angular/core';

import { ModalController } from 'ionic-angular';







@Component({
  templateUrl: 'contact.html'
})
export class ContactPage {
  constructor(public modalCtrl: ModalController) { }

  audio: any = new Audio('assets/audio/accueil.m4a');
  play(){
       
        this.audio.play();
  }
  
  stop(){
        this.audio.pause();
  }
  
  begin(){
        this.audio.currentTime = 0;
  }
}





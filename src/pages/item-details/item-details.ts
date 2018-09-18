import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})

export class ItemDetailsPage {
  selectedItem: any;
  actor: string[] = ['0','0','0','0','0','0','0','0','0','0','0','0']
  actor1;
  
  c: string = "vert";
  audio: any = new Audio('assets/audio/accueil.m4a');


  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController) {
    // we have an item available as a nav param
    
    this.selectedItem = navParams.get('item');

  }
  
  
  
showAlert(i) 
 {
     var rep: string[] = this.actor;


     var b_rep = this.selectedItem.reponse;
     var gagne: number = 0;
     var pt;
    
    for (var j = 0; j < 4; j++)
    {
        if ( rep[j] === b_rep[j] )
            gagne++;
    }

    pt = gagne + ' points';

        let alert = this.alerCtrl.create(
        {
          title: 'Score: ',
          subTitle: pt,
          buttons: ['OK']
        });
        
        alert.present();
  } 
  
  
  /**   gotoResultat(){  this.navCtrl.push(); } */
  
  
  doSubmit(event) {  event.preventDefault();  }
  
  play(){ this.audio.play(); }
  stop(){ this.audio.pause(); }
  begin(){  this.audio.currentTime = 0; }
  
} 

























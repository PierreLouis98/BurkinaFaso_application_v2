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
  
  c: string = "vert";
  audio: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController) {
    // we have an item available as a nav param
    

    
    this.selectedItem = navParams.get('item');
    this.audio = [];
    for (var i = 0; i < this.selectedItem.message.length; i++)
        this.audio.push(new Audio('assets/audio/Francais/' + this.selectedItem.message[i] + '.m4a')); 
            

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
        buttons: [
        {
          text: 'Retour',
          handler: () => {
            console.log('Retour clicked');
          }
        },
        {
          text: 'Résultat',
          handler: () => {
            console.log('Résultat clicked');
          }
        }
      ]
        });
        
        alert.present();
  } 
  
  
  /**   gotoResultat(){  this.navCtrl.push(); } */
  
  
  doSubmit(event) {  event.preventDefault();  }
  
  play(i)
  { 
    for(var j = 0; j < this.audio.length; j++)
    {
        if(this.audio[j].currentTime != 0 && j!=i)
        {
            this.audio[j].pause();
            this.audio[j].currentTime = 0;
        }
    }
    this.audio[i].play(); 
  }
  stop(i){ this.audio[i].pause(); }
  begin(i){  this.audio[i].currentTime = 0; }
  
} 

























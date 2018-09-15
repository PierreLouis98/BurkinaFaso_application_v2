import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { AlertController } from 'ionic-angular';



@Component({
  selector: 'page-suite',
  templateUrl: 'suite.html',
})
export class SuitePage {

  actor;
  actor2;
  actor3;
  actor4;
  actor5;
 
  audio: any = new Audio('assets/audio/calcul.mp3');
  audio2: any = new Audio('assets/audio/calcul2.mp3');
  audio3: any = new Audio('assets/audio/calcul3.mp3');
  
  question: string[][];
  
  c: string = "violette";
  i: number = 0;
 
  
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController ) {
  this.question = [['1.	Quelle variété de niébé comptez-vous produire ?','A.	Mobenga','B.	KVX 442','C.	Bengsiido', 'D.  Autres'],
['2.	Quel revenu souhaitez-vous obtenir après la vente?','A.	   Moins de 50 000 F','B.	Entre 50 000 et  100 000 F','C.	Entre 100 000 et 200 000 F','D.	Plus de 200 000 F'],
['3.	Sur quelle superficie  comptez-vous produire votre niébé ?','A.	Entre 0,25 et un 1 Hectare','B.	Entre 1 et 3 Ha','C.	Entre 3 et  5 Ha'],
['4.	A quelle période de l’année souhaitez-vous vendre ?','A.	Entre janvier et mars','B.	Entre avril et juin','C.	Entre juillet et septembre','D.	Entre octobre et décembre'],
['5.	Combien de sacs de 100 kg  de niébé espérez-vous récolter  ?','A.	Moins de 5 sacs ','B.	Entre 5 et 20 sacs','C.	Entre 21 et 30 sacs','D.	Plus de 50 sacs'],
['6.	Combien vous coute les équipements ?','A.	Moins de 10 000 F','B.	Entre 10 000 et 20 000 F','C.	Entre 20 005 et 50 000 F','D.	Plus de 50 000 F'],
['7.	Combien de francs vous coute la main d’œuvre','A.	Moins de 10 000 F','B.	Entre 10 000 et 20 000 F','C.	Entre 20 005 et 50 000 F','D.	Plus de 50 000 F'],
['8.	Combien de francs vous coutent les semences','A.	Moins de 10 000 F','B.	Entre 10 000 et 20 000 F','C.	Entre 20 005 et 50 000 F','D.	Plus de 50 000 F'],
['9.	Combien de francs vous coutent les produits phyto','A.	Moins de 10 000 F','B.	Entre 10 000 et 20 000 F','C.	Entre 20 005 et 50 000 F','D.	Plus de 50 000 F'],
['10.	Combien de francs vous coute l’engrais ','A.	Moins de 50 000 F','B.	Entre 50 000 et 200 000F','C.	Entre 200 000 F et 300 000F','D.	Plus de 300 000'],
['11.	Combien de francs vous coutent les autres dépenses ?','A.	Moins de 50 000 F','B.	Entre 50 000 et 200 000F','C.	Entre 200 000 F et 300 000F','D.	Plus de 300 000'],
['12.	Quels sont vos besoins de niébé pour la consommation, les dons  (etc) pour l’année ?','A.	Moins de 5 sacs ','B.	Entre 5 et 20 sacs','C.	Entre 21 et 30 sacs','D.	Plus de 50 sacs'],
['13.	Quelle quantité de niébé souhaitez-vous vendre ?','A.	Moins de 5 sacs ','B.	Entre 5 et 20 sacs','C.	Entre 21 et 30 sacs','D.	Plus de 50 sacs'],
['14.	A quel prix souhaitez-vous vendre  le  Kg  votre niébé ?','A.	Entre 0 et 250 F','B.	Entre 255 et 400 F','C.	Entre 405 et 600 F','D.	Plus de 600 F']]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuitePage');
  }

        
        
 showAlert() 
 {
     var resul1 = this.actor[1];
     var message1;
     var message0;
     var message2;
     var message3;
     var message4;
     
     if ( this.actor[2] === '1')
    {
        if ( this.actor[4] === '3' || this.actor[4] === '4')
                message0 = "En supposant un rendement maximal de 2 tonnes par ha votre superficie ne vous permet pas d’atteindre  ce niveau de production";
    }
     else if ( this.actor[2] === '2')
     {
        if ( this.actor[4] === '1')
                message0 = "En supposant un rendement maximal de 2 tonnes par ha votre superficie vous permet d’avoir plus de production si vous suivez bien l’itinéraire";
     }
     else if ( this.actor[2] === '3')
     {
        if ( this.actor[4] !== '4')
                message0 = "En supposant un rendement maximal de 2 tonnes par ha, votre superficie ne vous permet pas d’avoir plus de production si vous suivez bien l’itinéraire";
     }
     if (this.actor[11] > this.actor[4])
            message1 = "Attention, vos besoins de niébé semblent supérieurs à votre production";
     if ( this.actor[12] > this.actor[4] )
            message2 = "Attention, vos besoins de  vente de niébé semblent supérieurs à votre production";
     if ( this.actor[13] === '4')
            message3 = "Attention, il est généralement difficile de pouvoir vendre à ce prix";
     if ( this.actor[3] === '4')
            message4 = "Attention, les prix sont géneralement plus bas sur cette période à cause de l’offre parfois importante de niébé";
            
    let alert = this.alerCtrl.create({
      title: 'Attention !',
      subTitle: message4,
      buttons: ['OK']
    });

    alert.present()
  }
  
  play(){ this.audio.play(); }
  stop(){ this.audio.pause(); }
  begin(){ this.audio.currentTime = 0; }
  



}




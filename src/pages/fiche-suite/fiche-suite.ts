import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-fiche-suite',
  templateUrl: 'fiche-suite.html',
})

export class FicheSuitePage
{
  selectedItem: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) 
  {
        this.selectedItem = navParams.get('item');
  }
 
  doSubmit(event) { event.preventDefault(); };

}



























import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})


export class ListPage 
{
  titles: string;
  notes: string[];
  questions: string[][][];
  index: string[];
  reponses: string[][];
  c: string = "vert";
  audio: any = new Audio('assets/audio/page_quizz.m4a');
  
  
  items: Array<{ reponse: string[], ind: string, title: string, note: string, question: string[][] }>;




  constructor(public navCtrl: NavController, public navParams: NavParams) 
      {

/** TABLEAU A UNE DIMENSION */
     /** Tableau de notes */
        this.notes = ['La préparation du sol', 'La semence', 'Le semis', 'Le sarclage', 'Les engrais', 
        'Les traitements', 'La récolte', 'Le séchage', 'Le battage', 'Le tri', 'La conservation', 
        'Le stockage'];

      /** Tableau de titres */
        this.titles = 'Etape ';
        
      /** Index */
        this.index = ['1','2','3','4','5','6','7','8','9','10','11','12'];
        
      /** Reponses */
        this.reponses = [['1','1','4','1'], ['4','2','1','4','1','2','4','3','1'],
        ['4','1','4','2','4','4'],
        ['4','4','4']];
 
/** TABLEAU A TROIS DIMENSIONS */
     this.questions = [[['1. Quels sols pour le niébé pluvial ?','A. Les sols sableux-limoneux bien drainés conviennent au niébé','B.  On peut cultiver le niébé dans les  bas fond','C. Le niébé tolère les sols trop humides','D. Toutes les réponses précédentes sont vraies'],
     ['2.Dans quelles conditions fait-on le labour ?', 'A. après une bonne pluie et la profondeur devrait atteindre 20 cm', 'B. A tout moment ', 'C. après une bonne pluie et la profondeur devrait atteindre 70 mm ', 'D. Toutes les reponses sont fausses '], 
     ['3.Quel est l’utilité du labour ? ', 'A. labourer et herser le champs permet de stimuler la croissance des racines ', 'B. labourer permet d’améliorer les rendements ', 'C. le labour est facultatif et n’a aucune incidence sur le rendement ', 'D. les reponses a et bsont vraies '],
     ['4. Quelle quantité de fumure organique pour un ha de niébé ? ', 'A. Pour 1 ha de culture du niébé, il faudrait en moyenne 1 à 5 tonnes de fumure organique ', 'B. Pour un ha il faudrait en moyenne 6 à 10 tonnes de fumure organique', 'C. Pour un hectare de production, il faudrait pus de 10 tonnes de fumure organique', 'D. Aucune des réponses précédentes n’est vraie ']], 
     [['1. Où trouve-t-on la semence de qualité ?', 'A.	Avec n’importe quel commerçant au marché', 'B.	Avec des producteurs semenciers agrées', 'C. A l’INERA s’il n’y a pas de producteurs semenciers agrées à proximité', 'D.	les réponses B et C  sont vraies'],
     ['2.	Quels types de graines faut-il utiliser pour avoir de bons rendements', 'A. Les graines de consommation', 'B. Les semences certifiées', 'C. les récoltes de l’année précédente', 'D. Aucune réponse n’est vraie'], 
     ['3. Quels critères tient-on compte dans le choix de la variété','A. Le choix de la variété doit tenir compte de la durée du cycle cultural, du potentiel de rendement et des contraintes biotiques et abiotiques de la zone de production','B. Le choix de la variété doit tenir exclusivement compte de son accessibilité (prix,disponibilité…)','C. Le choix de la variété doit tenir uniquement compte des opportunités de revente du niébé','D. Toutes les reponses sont vraies'], 
     ['4. Quelle quantité de semences pour 1 ha de niébé en culture pure ?','A. 3 kg de semences', 'B. 40 kg de semences','C. 60 kg de semences','D. 12  à 25 kg de semences'], 
     ['5. Laquelle de ces variétes de niébé, possède le cycle de production le plus court','A. IT 98 K-205-8','B. IT 90 K-372-1-2','C. KVX-30-309-6G','D.IT99 K-573-1-1'], 
     ['6. Parmi les variétés suivantes laquelle est  semi-rampante ?','A. IT 98 K-205-8','B.IT99 K-573-1-1','c. IT 97 K-499-38','D. IT 97 K-499-35'],
     ['7. Question : laquelle de ces variétés possède le meilleur  rendement ?', 'a. IT99 K-573-1-1', 'b. IT 98 K-205-8', 'c. IT96D-610-', 'd.  IT 97 K-499-38'], 
     ['8. Laquelle de ces variétés tolère mieux la sécheresse', 'A. IT99 K-573-1-1 ', 'B. IT 98 K-205-8 ', 'C. IT96D-610- ', 'D. IT 97 K-499-38 '], 
     [ '9.Quel traitement des semences avant le semi ?', 'a Il faut traiter la semence avec le calthio contre les insectes et les maladies avant de semer', 'b Il n’est pas necessaire de faire un traitement des semences avant le semis', 'c Il faudrait traiter les semences avec le decis avant les semis ', 'd Toutes les reponses précédemment proposées sont vraies' ]],
     [['1. Quels écartements en culture pure ?','A.	Pour les variétés extra précoces: 50 cm entre les lignes et	20 cm entre les poquets','B. Pour les diverses variétés de niébé: 60 à 65 cm entre les lignes et 40 cm entre les poquets ','C.  Pour les variétés intermédiaires 80 Cm entre les lignes et 40 cm entre les poquets','D. toutes les réponses sont vraies'],
     ['2. Quels écartements en culture associée de niébé ?','A. En culture associée,  le semis de 4 lignes de niébé entre 2 lignes de mil ou sorgho donne des bons résultats','B. En culture associée,  le semis de 2 lignes de niébé entre 4 lignes de mil ou sorgho donne des bons résultats','C. En culture associée,  le semis de 4 lignes de niébé entre 4 lignes de mil ou sorgho donne des bons résultats','D. En culture associée,  le semis de 2 lignes de niébé entre 2 lignes de mil ou sorgho donne des bons résultats'],
     ['3. A quelle période doit-on semer le niébé pluvial (variétés extra-précoces :60-70 jours) ?','A. Les semis doivent se faire quand la pluviométrie est forte. la date de semis varie selon les variétés et les zones. Elle se situe généralement de fin juin jusqu’au 15 juillet','B. Entre décembre et janvier','C. Après une bonne pluie (15mm au minimum)','D. Les réponses A et C sont vraies'],
     ['4. Combien de graines de niébé faut-il en moyenne par poquet ?','A.	5 graines','B.	3 graines','C.	4 graines','D.	1 graine'],
     ['5. Pourquoi faut-il enrober les semences avant les semis ?','A. Pour éloigner les insectes','B. Pour éviter les maladies','C. Pour permettre une bonne germination','D. toutes les réponses sont vraies'],
     ['6. Pourquoi faut-il faire des re-semis et démarriage ?','A. On fait le resemis parce que si la semence est mal traitée, elle subit des dommages par les insectes','B. On fait le resemis une semaine après les semis si la germination n’est pas satisfaisante','C. On doit faire le démariage à 2 plants par poquets','D.   Toutes les réponses sont vraies']],
     [['1.	Quand faut-il sarcler le niébé ?','A.  Il faut faire le sarclage chaque mois','B. Il faut faire le premier sarclage après la levée soit environ 15 jours après semis','C. Faire un deuxième sarclage 15 jours après celui du premier','D. Les réponses B et C sont vraies'],
     ['2.	Quel est l’intérêt du sarclage ?','A.  Le sarclage permet de débarrasser le site des arbustes et broussailles.  ','B. Le sarclage permet de mesurer la superficie de la parcelle','C. Le sarclage favorise un bon développement des racines du niébé','D. Les réponses A  et C sont vraies'],
     ['3.	Comment faire le sarclage ?','A.	Le sarclage peut se faire manuellement ou à l’aide d’une charrue','B.	Le sarclage doit obligatoirement se faire à la main','C.	Le sarclage peut se faire avec des billons','D.	Les réponses A et C sont vraies']]
     ];
     
/** TABLEAU A DEUX DIMENSIONS */       
      /** Tableau d'item contenant le tableau d'icon, de note et de titre */
        this.items = [];
        for (var i = 0; i < 4; i++)
            this.items.push({ reponse: this.reponses[i], ind: this.index[i], title: this.titles + (i+1), note: this.notes[i] , question: this.questions[i]  }); 
                        
        }



     itemTapped(event, item) {
        this.navCtrl.push(ItemDetailsPage, {item: item});
     }
     
       
  play(){  this.audio.play();  }
  stop(){  this.audio.pause(); }
  begin(){ this.audio.currentTime = 0; }
}


































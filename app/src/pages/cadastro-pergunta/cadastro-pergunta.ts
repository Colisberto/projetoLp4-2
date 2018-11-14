/** CRIADO POR COLISBERTO */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Pergunta} from  '../../modules/pergunta';
import { HttpClient } from '@angular/common/http';
import { Resposta } from '../../modules/resposta';
import { CadastroDescricaoRespostaPage } from '../cadastro-descricao-resposta/cadastro-descricao-resposta';

/**
 * Generated class for the CadastroPerguntaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-pergunta',
  templateUrl: 'cadastro-pergunta.html',
})
export class CadastroPerguntaPage {

  private orderForm;
  public perguntas: Pergunta;
  resp:Resposta;
   public ax:Resposta[];
   i:number=0;
    load;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    private _alertCtrl: AlertController,
    prgit ivate _loadCtr: LoadingController,
    ) 
      {
        this.resp = new Resposta;
        this.resp=this.navParams.get('descricoes');
        this.perguntas=new Pergunta;
       
        this.perguntas.respostas= this.resp;
       
    
      }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPerguntaPage');
  }
cadastroDescricaoOpA(){
  this.navCtrl.push(CadastroDescricaoRespostaPage.name);

}
cadastroDescricaoOpB(){
  this.navCtrl.push(CadastroDescricaoRespostaPage.name);
  
}
cadastroDescricaoOpC(){
  this.navCtrl.push(CadastroDescricaoRespostaPage.name); 
  console.log(this.ax[0].descricao);
}
cadastroDescricaoOpD(){
  this.navCtrl.push(CadastroDescricaoRespostaPage.name);
}
cadastroDescricaoOpE(){
  this.navCtrl.push(CadastroDescricaoRespostaPage.name);
  console.log(this.ax[3].descricao);
}

}


 
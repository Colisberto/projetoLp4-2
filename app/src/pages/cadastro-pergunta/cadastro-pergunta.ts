/** CRIADO POR COLISBERTO */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

   public ax :Resposta;



  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    ) {
      this.perguntas = new Pergunta();
      this.ax = new Resposta();
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
}
cadastroDescricaoOpD(){
  this.navCtrl.push(CadastroDescricaoRespostaPage.name);
}
cadastroDescricaoOpE(){
  this.navCtrl.push(CadastroDescricaoRespostaPage.name);
}

}


 
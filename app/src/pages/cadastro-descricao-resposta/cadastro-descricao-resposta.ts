import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Resposta } from '../../modules/resposta';
import { Pergunta } from '../../modules/pergunta';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the CadastroDescricaoRespostaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-descricao-resposta',
  templateUrl: 'cadastro-descricao-resposta.html',
})
export class CadastroDescricaoRespostaPage {

  perguntas :Pergunta;

  respostas: Resposta;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroDescricaoRespostaPage');
  }

}

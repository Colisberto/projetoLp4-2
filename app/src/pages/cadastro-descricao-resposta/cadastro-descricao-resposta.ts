import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Resposta } from '../../modules/resposta';
import { Pergunta } from '../../modules/pergunta';
import { HttpClient } from '@angular/common/http';
import { CadastroPerguntaPage } from '../cadastro-pergunta/cadastro-pergunta';

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
      this.respostas = new Resposta;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroDescricaoRespostaPage');
  }

  salvar(user:Resposta){
    this.respostas.letra="a";
      this.navCtrl.push(CadastroPerguntaPage.name,{descricoes: user});
     console.log(this.respostas.condicao,this.respostas.descricao,this.respostas.letra);
    

  }

}

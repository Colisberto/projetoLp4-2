import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaUsuarioPage } from '../lista-usuario/lista-usuario';
import { CadastroPerguntaPage } from '../cadastro-pergunta/cadastro-pergunta';
import { ListaRespotaPage } from '../lista-respota/lista-respota';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  listaUsuarios = ListaUsuarioPage;
  /** Acrescentado para ser usado na chamada da tela */
  listaRespota = ListaRespotaPage;
  cadastraPerguntas = CadastroPerguntaPage;
  constructor(public navCtrl: NavController) {

  }

  avancarListaUsuario(){
    this.navCtrl.push(ListaUsuarioPage.name);
  }
  
  /**   OBS: COLISBERTO
   * Acredito que o erro pode estar aqui para chamar a tela de cadastro em 
   * cadastro-pergunta/cadastro-pergunta.html
   */
  avancarCadastraPerguntas(){
    this.navCtrl.push(ListaRespotaPage.name);
  }

}

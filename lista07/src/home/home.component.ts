import { Component } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
  constructor (private usuarioService : UsuarioService) {}

  ngOnInit() {
    const rodape = document.querySelector('#rodape');
    const usuario = this.usuarioService.getDadosUsuario()

    if (rodape) {
      rodape.innerHTML = JSON.stringify(usuario)
    }
  }
}

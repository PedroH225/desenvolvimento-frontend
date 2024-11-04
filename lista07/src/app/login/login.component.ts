import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email : string = '';
  senha : string = '';

  constructor(
    private usuarioService : UsuarioService,
    private router : Router
  ) {
  }

  onSubmit() {
    const usuario = {
      email: this.email,
      senha: this.senha
    }
    this.usuarioService.login(usuario).subscribe(
      (response : any) => {
        console.log('Login bem-sucedido!', response);
        this.router.navigate(['/home']); 
      },
      (error : any) => {
        console.error('Erro de login:', error);

      }
    );
}
}

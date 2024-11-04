import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor() {}

  login(usuario: { email: string, senha: string }): Observable<any> {
     localStorage.setItem('usuario', JSON.stringify(usuario));
     return of(usuario);
  }


  getDadosUsuario(): { email: string, senha: string } | null {
    const usuarioData = localStorage.getItem('usuario');
    return usuarioData ? JSON.parse(usuarioData) : null;
  }
}

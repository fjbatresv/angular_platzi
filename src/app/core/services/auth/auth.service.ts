import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { TokenService } from '../token.service';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private httpClient: HttpClient,
    private tokenService: TokenService) { }

  createUser(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.afAuth.signOut();
  }

  hasUser() {
    return this.afAuth.authState;
  }

  loginRestApi(email: string, password: string) {
    return this.httpClient.post(`${environment.url_api}/auth`, {
      email, password
    }).pipe(tap((response: any) => this.tokenService.saveToken(response.token)));
  }
}

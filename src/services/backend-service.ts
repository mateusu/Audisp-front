import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BackendService {

    constructor(private http: HttpClient) {
    }

    getListaAudiencas() {
        return this.http.get('http://localhost:6005/aud/lista', {});
    }

    getAudienciasSugeridas() {
        return this.http.get('http://localhost:6005/aud/sugeridas', {});
    }

    getUserLikes() {
        return this.http.get('http://localhost:6005/user/likes', {});
    }

    getAuthorization(email, senha) {
        return this.http.post('http://localhost:6005/auth/validate', { email: email, senha: senha });
    }

}
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

    getUserLikes(body) {
        return this.http.post('http://localhost:6005/user/likes', body);
    }

    updateUserLikes(body){
        return this.http.put('http://localhost:6005/user/updateLikes', body);
    }

    getAuthorization(email, senha) {
        return this.http.post('http://localhost:6005/auth/validate', { email: email, senha: senha });
    }

    registerUser(userData){
        return this.http.post('http://localhost:6005/auth/register', userData);
    }

}
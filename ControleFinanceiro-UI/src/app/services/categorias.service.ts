import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../models/Categorias';

const httpoptions = {
  headers: new HttpHeaders ({
    'Content-Typer' : 'applicantion/json'

  })
}

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  url = 'api/categorias'

  constructor(private http: HttpClient) {}
    PegarTodos(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.url);
  }
    PegarCategoriaPeloId(categoriaId: number) : Observable<Categoria>{
      const apiUrl = `${this.url}/${categoriaId}`;
      return this.http.get<Categoria>(apiUrl);
    }

    NovaCategoria(categorias: Categoria) : Observable<any>{
      return this.http.post<Categoria>(this.url, categorias, httpoptions);
    }

    AtualizarCategoria(categoriaId: number, categoria: Categoria ) : Observable<any>{
      const apiUrl = `${this.url}/${categoriaId}`;
      return this.http.put<Categoria>(apiUrl, categoria, httpoptions);
    }
    ExcluirCategoria(categoriaId: number) : Observable<any>{
      const apiUrl = `${this.url}/${categoriaId}`;
      return this.http.delete<number>(apiUrl, httpoptions);
    }
}

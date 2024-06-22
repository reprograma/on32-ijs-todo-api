import { v4 as uuidv4 } from 'uuid';

export class Task {
    id: string;
    titulo: string;
    descricao: string;
    status: 'ABERTA' | 'FEITA' ;

    constructor(titulo: string, descricao: string){
        this.id = uuidv4();
        this.titulo = titulo;
        this.descricao = descricao;
        this.status = 'ABERTA';
    }
}
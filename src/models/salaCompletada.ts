export class SalaCompletada{
    usuario:string;
    inicioRun:string;
    nivel:number;
    dificultad:number;
    danoRecibido:{
        enem1:number;
        enem2:number;
        enem3:number;
        enem4:number;
    }
    valoracionEnemigos:{
        enem1:number;
        enem2:number;
        enem3:number;
        enem4:number;
    }
    tiempoSala:number;
    danoRecibidoJefe:number;
    salaJefe:boolean;
}
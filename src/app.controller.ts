import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import firebase, { initializeApp } from "firebase/app";
import "firebase/database";
import { getDatabase, ref, set } from 'firebase/database';
import { MuerteUsuario } from './models/muerteUsuario';
import { SalaCompletada } from './models/salaCompletada';
import { NivelCompletado } from './models/nivelCompletado';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/muerte')
  muerte(@Body() body:MuerteUsuario): void {
    const firebaseConfig = {
      apiKey: "AIzaSyC6xePrFT1bd7fxGspNLSgzFTO44-hYy48",
      authDomain: "pcgnest.firebaseapp.com",
      databaseURL: "https://pcgnest-default-rtdb.firebaseio.com",
      projectId: "pcgnest",
      storageBucket: "pcgnest.appspot.com",
      messagingSenderId: "367952707578",
      appId: "1:367952707578:web:f6a2fdf4e35c9240dbae43"
    };
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    var muerte :MuerteUsuario = body;
    set(ref(database, 'users/'+muerte.usuario+'/'+muerte.inicioRun+'/muerte'), muerte);
  }
  @Post('/sala')
  sala(@Body() body:SalaCompletada): void{
    const firebaseConfig = {
      apiKey: "AIzaSyC6xePrFT1bd7fxGspNLSgzFTO44-hYy48",
      authDomain: "pcgnest.firebaseapp.com",
      databaseURL: "https://pcgnest-default-rtdb.firebaseio.com",
      projectId: "pcgnest",
      storageBucket: "pcgnest.appspot.com",
      messagingSenderId: "367952707578",
      appId: "1:367952707578:web:f6a2fdf4e35c9240dbae43"
    };
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    var salaF :SalaCompletada = body;
    set(ref(database, 'users/'+salaF.usuario+'/'+salaF.inicioRun+'/'+salaF.nivel+'/'+Date.now()), salaF);
  }
  @Post('/nivel')
  nivel(@Body() body:NivelCompletado): void{
    const firebaseConfig = {
      apiKey: "AIzaSyC6xePrFT1bd7fxGspNLSgzFTO44-hYy48",
      authDomain: "pcgnest.firebaseapp.com",
      databaseURL: "https://pcgnest-default-rtdb.firebaseio.com",
      projectId: "pcgnest",
      storageBucket: "pcgnest.appspot.com",
      messagingSenderId: "367952707578",
      appId: "1:367952707578:web:f6a2fdf4e35c9240dbae43"
    };
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    var nivelF :NivelCompletado = body;
    set(ref(database, 'users/'+nivelF.usuario+'/'+nivelF.inicioRun+'/'+nivelF.nivel+'/NivelFinalizado'), nivelF);
  }
}

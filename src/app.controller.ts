import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import firebase, { initializeApp } from "firebase/app";
import "firebase/database";
import { getDatabase, ref, set } from 'firebase/database';
import { MuerteUsuarioAdapt } from './models/muerteUsuarioAdapt';
import { SalaCompletadaAdapt } from './models/salaCompletadaAdapt';
import { NivelCompletadoAdapt } from './models/nivelCompletadoAdapt';
import { muerteUsuarioStatic } from './models/muerteUsuarioStatic';
import { salaCompletadaStatic } from './models/salaCompletadaStatic';
import { nivelCompletadoStatic } from './models/nivelCompletadoStatic';
import { Cellular } from './models/cellular.model';
import { Tilemap } from './models/tilemap.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/muerteAdapt')
  muerteAdapt(@Body() body:MuerteUsuarioAdapt): void {
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
    var muerte :MuerteUsuarioAdapt = body;
    set(ref(database, 'users/'+muerte.usuario+'/'+muerte.inicioRun+'/muerte'), muerte);
  }
  @Post('/salaAdapt')
  salaAdapt(@Body() body:SalaCompletadaAdapt): void{
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
    var salaF :SalaCompletadaAdapt = body;
    set(ref(database, 'users/'+salaF.usuario+'/'+salaF.inicioRun+'/'+salaF.nivel+'/'+Date.now()), salaF);
  }
  @Post('/nivelAdapt')
  nivelAdapt(@Body() body:NivelCompletadoAdapt): void{
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
    var nivelF :NivelCompletadoAdapt = body;
    set(ref(database, 'users/'+nivelF.usuario+'/'+nivelF.inicioRun+'/'+nivelF.nivel+'/NivelFinalizado'), nivelF);
  }
  @Post('/muerteStatic')
  muerteStatic(@Body() body:muerteUsuarioStatic): void {
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
    var muerte :muerteUsuarioStatic = body;
    set(ref(database, 'users/'+muerte.usuario+'/'+muerte.inicioRun+'/muerte'), muerte);
  }
  @Post('/salaStatic')
  salaStatic(@Body() body:salaCompletadaStatic): void{
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
    var salaF :salaCompletadaStatic = body;
    set(ref(database, 'users/'+salaF.usuario+'/'+salaF.inicioRun+'/'+salaF.nivel+'/'+Date.now()), salaF);
  }
  @Post('/nivelStatic')
  nivelStatic(@Body() body:nivelCompletadoStatic): void{
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
    var nivelF :nivelCompletadoStatic = body;
    set(ref(database, 'users/'+nivelF.usuario+'/'+nivelF.inicioRun+'/'+nivelF.nivel+'/NivelFinalizado'), nivelF);
  }
  @Post('/cellularAdapt')
  cellularAdapt(@Body() body:Cellular):void{
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
    var cellularA:Cellular = body;
    set(ref(database, 'algorithms/Cellular/Adatpt/'+Date.now()),cellularA);
  }
  @Post('/cellularStatic')
  cellularStatic(@Body() body:Cellular):void{
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
    var cellularA:Cellular = body;
    set(ref(database, 'algorithms/Cellular/Static/'+Date.now()),cellularA);
  }
  @Post('/tileMapAdapt')
  tileMapAdapt(@Body() body:Tilemap):void{
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
    var tilemap:Tilemap = body;
    set(ref(database, 'algorithms/Tilemap/Adapt/'+Date.now()),tilemap);
  }
  @Post('/tileMapStatic')
  tileMapStatic(@Body() body:Tilemap):void{
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
    var tilemap:Tilemap = body;
    set(ref(database, 'algorithms/Tilemap/Static/'+Date.now()),tilemap);
  }
}

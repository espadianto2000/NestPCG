import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import firebase, { initializeApp } from "firebase/app";
import "firebase/database";
import { getDatabase, ref, set } from 'firebase/database';
import { MuerteUsuario } from './models/muerteUsuario';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/prueba')
  prueba(@Body() body:MuerteUsuario): void {
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
    set(ref(database, 'users/prueba'), muerte);
  }
}

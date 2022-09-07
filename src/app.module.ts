import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
 
    /**Inicio da configuração da conexão com o banco Postgress
     * Antes da configuração inicial necessita desse pacote instalado 
     * npm install --save @nestjs/typeorm pg
     */
     imports: [ConfigModule.forRoot() ,TypeOrmModule.forRootAsync({
    useFactory:()=> ({
      type:"postgres",
      host:"localhost",
      port:5432,
      username:"postgres",
      password:"admin",
      database:"blog",
      entities:[__dirname+"/**/*.entity{.ts,.js}"],
      synchronize:true
    
    })
  }),],
  controllers: [AppController],
  providers: [AppService],
   
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './services/auth.service';

@Module({
    imports:[
        JwtModule.registerAsync({
            imports:[ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) =>({
                /**Verificar se o segredo vai importar do .ENV */
                secret: configService.get('JWT_SECRET'),
                signOptions: {expiresIn:'1000000s'}
            })
        })
    ],
    providers:[AuthService],
    exports: [AuthService]
})
export class AuthModule {}

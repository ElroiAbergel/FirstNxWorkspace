import { Module } from '@nestjs/common';
import { CsvModule } from './csv/csv.module';
import { MongooseModule } from '@nestjs/mongoose';
import { NetflixModule } from './Netflix/Netflix.module';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from './config/config.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
require('dotenv').config();
@Module({
  imports: [CsvModule, MongooseModule.forRoot(process.env.DATABASE_HOST_NETFLIX),
    MongooseModule.forRoot(process.env.DATABASE_HOST_USER)
    ,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    NetflixModule,
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [ConfigService],
})
export class AppModule {
}

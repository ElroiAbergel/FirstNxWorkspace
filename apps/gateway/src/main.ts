import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser'; 
const session = require('express-session');
const passport = require('passport');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.use(cookieParser.default());
  app.use(
    session({
      secret: 'your_secret_key',
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        sameSite: 'lax', 
      },
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: process.env.FRONTEND_URL, 
    credentials: true,
  });
  
  await app.listen(process.env.PORT);
}

bootstrap();

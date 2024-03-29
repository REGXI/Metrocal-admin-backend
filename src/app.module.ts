import { Injectable, Module, forwardRef } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from './modules/users/users.module'
import { RolesModule } from './modules/roles/roles.module'
import { AuthModule } from './modules/auth/auth.module'
import { MailModule } from './modules/mail/mail.module'
import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { configEnv } from './configEnv'
import { QuotesModule } from './modules/quotes/quotes.module'
import { ClientsModule } from './modules/clients/clients.module'
import { ActivitiesModule } from './modules/activities/activities.module'
import { NotificationsModule } from './modules/notifications/notifications.module'
import * as admin from 'firebase-admin'
import type { ServiceAccount } from 'firebase-admin'
import * as serviceAccount from './config/firebase-token-key.json'
import {
  ConfigInitializer,
  ConfigurationModule,
} from './modules/configuration/configurations.module'
import { ConfigurationService } from './modules/configuration/configurations.service'
import { MethodsModule } from './modules/methods/methods.module'
import { CertificateModule } from './modules/certificate/certificate.module';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as ServiceAccount),
  storageBucket: 'push-notifications---metrocal.appspot.com',
})
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(configEnv as TypeOrmModuleOptions),
    UsersModule,
    RolesModule,
    AuthModule,
    MailModule,
    QuotesModule,
    ClientsModule,
    ActivitiesModule,
    NotificationsModule,
    ConfigurationModule,
    MethodsModule,
    CertificateModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigInitializer],
})
export class AppModule {}

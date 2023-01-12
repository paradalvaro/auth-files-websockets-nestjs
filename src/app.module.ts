import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilesModule } from './files/files.module';
import { AuthModule } from './auth/auth.module';
import { MessagesWsModule } from './messages-ws/messages-ws.module';

@Module({
  imports: [FilesModule, AuthModule, MessagesWsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { NinjaModule } from './ninja/ninja.module';
import { UserModule } from './user/user.module';
import { CatsService } from './cats/cats.service';

@Module({
  imports: [NinjaModule, UserModule],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule {}

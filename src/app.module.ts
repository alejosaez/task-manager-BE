import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module';
import { ConfigModule } from '@nestjs/config';

console.log('Valor de MONGO_URI:', process.env.MONGO_URI);
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    // MongooseModule.forRoot(process.env.MONGO_URI),
    TasksModule,
  ],
})
export class AppModule {}

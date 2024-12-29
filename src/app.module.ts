// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { TasksModule } from './tasks/tasks.module';
// import { ConfigModule } from '@nestjs/config';

// console.log('Valor de MONGO_URI:', process.env.MONGO_URI);
// @Module({
//   imports: [
//     ConfigModule.forRoot({ isGlobal: true }),
//     MongooseModule.forRoot(process.env.MONGO_URI),
//     TasksModule,
//   ],
// })
// export class AppModule {}
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module';
import { ConfigModule } from '@nestjs/config';

// Cambia temporalmente a la conexión directa para pruebas
const mongoUri =
  'mongodb+srv://alejosaezgebicki:XEVv1dn9XFhb27lt@cluster0.uf3ya.mongodb.net/taskManager?retryWrites=true&w=majority';

console.log('Valor de MONGO_URI:', mongoUri);
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(mongoUri), // Aquí pasamos directamente la URI
    TasksModule,
  ],
})
export class AppModule {}

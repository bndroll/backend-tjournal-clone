import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './user/user.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from './user/entities/user.entity'
import { PostModule } from './post/post.module';


@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'postgres',
            database: 'tjournal',
            entities: [UserEntity],
            synchronize: true
        }),
        UserModule,
        PostModule],
    controllers: [AppController],
    providers: [AppService]
})

export class AppModule {
}

import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { UserEntity } from './entities/user.entity'
import { Repository } from 'typeorm'
import { SearchUserDto } from './dto/search-user.dto'
import { LoginUserDto } from './dto/login-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private repository: Repository<UserEntity>
    ) {
    }

    create(dto: CreateUserDto) {
        return this.repository.save(dto)
    }

    findAll() {
        return this.repository.find()
    }

    findById(id: number) {
        return this.repository.findOne(id)
    }

    findByCond(cond: LoginUserDto) {
        return this.repository.findOne(cond)
    }

    update(id: number, dto: UpdateUserDto) {
        return this.repository.update(id, dto)
    }

    search(dto: SearchUserDto) {
    }
}

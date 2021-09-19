import { Injectable, NotFoundException } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

import { CreatePostDto } from './dto/create-post.dto'
import { UpdatePostDto } from './dto/update-post.dto'
import { PostEntity } from './entities/post.entity'
import { SearchPostDto } from './dto/search-post.dto'


@Injectable()
export class PostService {
    constructor(
        @InjectRepository(PostEntity)
        private repository: Repository<PostEntity>
    ) {
    }

    create(dto: CreatePostDto) {
        return this.repository.save(dto)
    }

    findAll() {
        return this.repository.find({
            order: {
                createdAt: 'DESC'
            }
        })
    }

    async popular() {
    }

    async search(dto: SearchPostDto) {
    }

    async findOne(id: number) {
        // await this.repository
        //     .createQueryBuilder('posts')
        //     .whereInIds(id)
        //     .update()
        //     .execute()

        const find = await this.repository.findOne(id)
        if (!find) throw new NotFoundException('Статья не найдена')

        return this.repository.findOne(id)
    }

    async update(id: number, dto: UpdatePostDto) {
        const find = await this.repository.findOne(+id)
        if (!find) throw new NotFoundException('Статья не найдена')

        return this.repository.update(id, dto)
    }

    async remove(id: number) {
        const find = await this.repository.findOne(+id)
        if (!find) throw new NotFoundException('Статья не найдена')

        return this.repository.delete(id)
    }
}

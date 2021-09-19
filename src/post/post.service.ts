import { Injectable } from '@nestjs/common'
import { CreatePostDto } from './dto/create-post.dto'
import { UpdatePostDto } from './dto/update-post.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
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

    findOne(id: number) {
        return `This action returns a #${id} post`
    }

    update(id: number, updatePostDto: UpdatePostDto) {
        return `This action updates a #${id} post`
    }

    remove(id: number) {
        return `This action removes a #${id} post`
    }
}

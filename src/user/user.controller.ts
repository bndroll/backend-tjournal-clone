import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'
import { SearchUserDto } from './dto/search-user.dto'


@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @Post()
    create(@Body() dto: CreateUserDto) {
        return this.userService.create(dto)
    }

    @Get()
    findAll() {
        return this.userService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.userService.findById(+id)
    }

    @Get('search')
    search(@Query() dto: SearchUserDto) {
        return this.userService.search(dto)
    }
}

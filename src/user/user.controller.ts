import { Body, Controller, Get, Param, Patch, Query, Request, UseGuards } from '@nestjs/common'

import { UserService } from './user.service'
import { SearchUserDto } from './dto/search-user.dto'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { UpdateUserDto } from './dto/update-user.dto'


@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @Get()
    findAll() {
        return this.userService.findAll()
    }

    @UseGuards(JwtAuthGuard)
    @Get('me')
    getProfile(@Request() req) {
        return req.user
    }

    @UseGuards(JwtAuthGuard)
    @Patch('me')
    update(@Request() req, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(+req.user.id, updateUserDto)
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

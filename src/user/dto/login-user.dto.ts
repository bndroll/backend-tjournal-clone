import { IsEmail, Length } from 'class-validator'


export class LoginUserDto {
    @IsEmail(undefined, { message: 'Неверная почта' })
    email: string

    @Length(6, 32, { message: 'Пароль должен содержать минимум 6 символов' })
    password: string
}
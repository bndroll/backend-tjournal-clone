import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'


@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    fullName: string

    @Column({ unique: true })
    email: string

    @Column({ nullable: true })
    password?: string
}

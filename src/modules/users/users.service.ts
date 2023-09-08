import { Injectable, HttpException } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { compare, hash } from 'bcrypt'
import { User } from './entities/user.entity'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.userRepository.findOneBy({
      email: createUserDto.email,
    })
    if (user) throw new HttpException('El usuario ya existe', 400)

    const hashedPassword = await hash(createUserDto.password, 10)
    const newUser = this.userRepository.create({
      ...createUserDto,
      password: hashedPassword,
    })
    return await this.userRepository.save(newUser)
  }

  async deleteById(id: number): Promise<User> {
    const user = await this.userRepository.findOneBy({ id })
    if (!user) throw new HttpException('Usuario no encontrado', 404)
    return await this.userRepository.remove(user)
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find()
  }

  async findById(id: number): Promise<User | {}> {
    const user = await this.userRepository.findOneBy({ id })
    return user ? user : { statusCode: 404, message: 'User not found' }
  }

  async findByEmail(email: string): Promise<User | {}> {
    const user = await this.userRepository.findOneBy({ email })
    return user || { statusCode: 404, message: 'User not found' }
  }
}

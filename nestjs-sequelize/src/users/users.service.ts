import { Injectable, Inject } from '@nestjs/common';
import { UserDto } from 'src/dto/user.dto';
import { User } from './user.entity';
import { Op } from 'sequelize';
import { UserQueryDto } from 'src/dto/user.query.dto';

@Injectable()
export class UsersService {

  constructor(
    @Inject('USERS_REPOSITORY') private usersRepository: typeof User
  ) { }

  findOne(sub: string): Promise<User> {
    return this.usersRepository.findOne<User>({
      where: {
        sub: sub
      }
    })
  }

  create(createUserDto: UserDto): Promise<User> {
    return this.usersRepository.create({
      sub: createUserDto.sub,
      preferred_username: createUserDto.preferred_username,
      name: createUserDto.name,
      given_name: createUserDto.given_name,
      family_name: createUserDto.family_name,
      email: createUserDto.email,
      email_verified: createUserDto.email_verified
    });
  }

  updateOne(sub: string, createUserDto: UserDto): Promise<any> {
    return this.usersRepository.update({
      preferred_username: createUserDto.preferred_username,
      name: createUserDto.name,
      given_name: createUserDto.given_name,
      family_name: createUserDto.family_name,
      email: createUserDto.email,
      email_verified: createUserDto.email_verified
    }, {
      where: { sub: sub }
    })
  }

  async createOrUpdateOne(sub: string, createUserDto: UserDto): Promise<User> {
    // try to update user
    let updated = await this.updateOne(sub, createUserDto)
    // if update fails then create user
    if (updated[0] === 0) {
      return this.create(createUserDto)
    }
    // reaches this point if update user succeeds
    return this.findOne(sub)
  }

  async findAll(userQuery: UserQueryDto): Promise<User[]> {
    return this.usersRepository.findAll<User>({
      where: {
        [Op.or]: [
          {
            preferred_username: userQuery.preferred_username || ''
          },
          {
            name: userQuery.name || ''
          }
        ]
      },
      order: [
        ['id', 'DESC']
      ],
      limit: 20
    })
  }

}
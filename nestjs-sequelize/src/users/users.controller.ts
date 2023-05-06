import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { UserQueryDto } from 'src/dto/user.query.dto';

@UseGuards(AuthenticatedGuard)
@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  findAll(@Query() userQuery: UserQueryDto): Promise<User[]> {
    return this.usersService.findAll(userQuery);
  }

}
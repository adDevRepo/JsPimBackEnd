import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import type { User } from '../../types/usersType';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @HttpCode(200)
  findAll(): User[] {
    return this.usersService.findAll();
  }
  @Get(':id')
  @HttpCode(200)
  findOne(@Param('id', ParseIntPipe) id: number): User {
    return this.usersService.findOne(id);
  }

  @Post()
  @HttpCode(201)
  create(@Body() createUser: CreateUserDto): User {
    return this.usersService.create(createUser);
  }

  @Delete(':id')
  @HttpCode(204)
  delete(@Param('id', ParseIntPipe) id: number): string {
    return this.usersService.delete(id);
  }
}

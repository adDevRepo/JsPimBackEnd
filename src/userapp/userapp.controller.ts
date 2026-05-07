import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  BadRequestException,
  Query,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common';
import { UserappService } from './userapp.service';
import { Prisma } from '../generated/prisma/client';

@Controller('userapp')
export class UserappController {
  constructor(private readonly userappService: UserappService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() createUser: Prisma.UserCreateInput) {
    const user = await this.userappService.create(createUser);
    if (!user) {
      throw new BadRequestException('Failed to create user');
    }
    return user;
  }

  @Get()
  @HttpCode(200)
  async findAll(@Query('role') role: string) {
    const users = await this.userappService.findAll(role);
    if (!users) {
      throw new BadRequestException('No users found');
    }
    return users;
  }

  @Get(':id')
  @HttpCode(200)
 async findOne(@Param('id', ParseIntPipe) id: number) {
    const user = await this.userappService.findOne(id);
    if (!user) {
      throw new BadRequestException('No user found');
    }
    return user;
  }

  @Patch(':id')
  @HttpCode(200)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUser: Prisma.UserUpdateInput,
  ) {
    const user = await this.userappService.update(id, updateUser);
    if (!user) {
      throw new BadRequestException('Failed to update user');
    }
    return user;
  }

  @Delete(':id')
  @HttpCode(200)
  async remove(@Param('id', ParseIntPipe) id: number) {
    const user = await this.userappService.remove(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
}

import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { Prisma } from '../generated/prisma/client';

@Injectable()
export class UserappService {
  constructor(private readonly db: DatabaseService) {}

  create(createUser: Prisma.UserCreateInput) {
    return this.db.user.create({
      data: createUser,
    });
  }

  findAll(role?: string) {
    return this.db.user.findMany({
      where: role ? { role: role as Prisma.EnumRoleFilter<'User'> } : undefined,
    });
  }

  findOne(id: number) {
    return this.db.user.findUnique({
      where: { id },
    });
  }

  update(id: number, updateUser: Prisma.UserUpdateInput) {
    return this.db.user.update({
      where: { id },
      data: updateUser,
    });
  }

  remove(id: number) {
    return this.db.user.delete({
      where: { id },
    });
  }
}
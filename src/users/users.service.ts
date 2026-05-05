import { Injectable } from '@nestjs/common';
import { User } from '../../types/usersType';
import { Client } from '../../types/clientsType';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private readonly client: Client = {
    id: 1,
    name: 'Nike',
    code: 'NK1234',
  };
  private users: User[] = [
    {
      id: 4,
      client: {
        id: 1,
        name: 'Nike',
        code: 'NK1234',
      },
      firstName: 'John',
      lastName: 'DOE',
      email: 'john.doe@hotmail.com',
      password: 'Password1234',
      role: 'user',
      isActive: true,
    },
  ];
  findAll(): User[] {
    return this.users;
  }
  findOne(id: number): User {
    return this.users.find((user) => user.id === id) as User;
  }
  create(userCreate: CreateUserDto): User {
    const newId = this.users.length + 1;
    const client = this.client;
    const newUser: User = {
      ...userCreate,
      id: newId,
      client,
    };
    this.users.push(newUser);
    return newUser;
  }

  delete(id: number): string {
    this.users = this.users.filter((user) => user.id !== id);
    return 'User deleted successfully.';
  }
}

import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { User as UserInterface } from './dto/user.interface';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private userRepository: typeof User,
  ) { }

  create(createUserDto: User) {
    return this.userRepository.create<User>({ ...createUserDto });
  }

  findAll() {
    return this.userRepository.findAll<User>();
  }

  findOne(id: number) {
    return this.userRepository.findOne<User>({
      where: { id },
      attributes: { exclude: ['password'] },
    });
  }

  update(id: number, updateUserDto: User) {
    // return { numberOfAffectedRows: 1, uptatedUser: updateUserDto };
    return this.userRepository.update<User>(
      { ...updateUserDto, id },
      { where: { id } },
    );
    // const [numberOfAffectedRows, [updatedUser]] =
    //   await this.userRepository.update<User>(
    //     { ...updateUserDto, id },
    //     { where: { id }, returning: true },
    //   );
    // return { numberOfAffectedRows, updatedUser };
  }

  async remove(id: number) {
    return await this.userRepository.destroy({ where: { id } });
  }
}

import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException } from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';
import { UsersService } from './users.service';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: Number })
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(+id);
  }

  @Post()
  // @ApiParam({ name: 'createUserDto', type: CreateUserDto })
  create(@Body() createUserDto: User) {
    return this.usersService.create(createUserDto);
  }

  @Put(':id')
  @ApiParam({ name: 'id', type: Number })
  update(@Param('id') id: number, @Body() updateUserDto: User) {
    return this.usersService.update(+id, updateUserDto);
    // const { numberOfAffectedRows, updatedUser } = await this.usersService.update(+id, updateUserDto);

    // // if the number of row affected is zero, it means the post doesn't exist in our db
    // if (numberOfAffectedRows === 0) {
    //   throw new NotFoundException('This Post doesn\'t exist');
    // }

    // // return the updated post
    // return updatedUser;
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: Number })
  async remove(@Param('id') id: number) {
    return await this.usersService.remove(+id);
  }
}

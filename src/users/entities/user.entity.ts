import { Table, Column, Model, Sequelize } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

@Table({ tableName: 'tb_users', timestamps: false })
export class User extends Model {

  @Column({ primaryKey: true, autoIncrement: true, defaultValue: null })
  @ApiProperty({ example: 1, description: 'The identificator of the User' })
  id: number;

  @Column
  @ApiProperty({ example: 'Fulano', description: 'The name of the User' })
  name: string;

  @Column
  @ApiProperty({
    example: 'janksdnhjasmdhf',
    description: 'The password of the User',
  })
  password: string;

  @Column
  @ApiProperty({
    example: 'TEACHER',
    description: 'The type of the User, can be "TEACHER" or "STUDENT"',
  })
  type: string;
}
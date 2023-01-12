import { ApiProperty } from '@nestjs/swagger';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @ApiProperty({
    description: 'User id - uuid',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @ApiProperty()
  @Column('text', { unique: true })
  email: string;
  @ApiProperty()
  @Column('text', { select: false })
  password: string;
  @ApiProperty()
  @Column('text')
  FullName: string;
  @ApiProperty()
  @Column('bool', { default: true })
  isActive: boolean;
  @ApiProperty()
  @Column('text', { array: true, default: ['user'] })
  roles: string[];
  @BeforeInsert()
  checkFieldsBeforeInsert() {
    this.email = this.email.toLowerCase().trim();
  }
  @BeforeUpdate()
  checkFieldsBeforeUpdate() {
    this.checkFieldsBeforeInsert();
  }
}

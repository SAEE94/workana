import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity('users')
export class UserEntity extends BaseEntity {

  constructor(id: any, name: string, surname: string, age: number) {
    super();
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.age = age;

    // if (!this.id) {
    //   this.createAt = new Date();
    // }
    // this.updateAt = new Date();
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  age: number;

  // @Column()
  // createAt: Date;


  // @Column()
  // updateAt: Date;

}

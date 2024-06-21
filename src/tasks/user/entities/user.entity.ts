import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userId:number;

  @Column()
  name:string;

  @Column()
  lastName:string;

  @Column()
  email:string;

  @Column()
  phoneNumber:number;

}

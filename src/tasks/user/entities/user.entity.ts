import { Reservation } from "src/tasks/reservations/entities/reservation.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn({name:"userId"})
  userId:number;

  @Column()
  userName:string;

  @Column()
  lastName:string;

  @Column()
  email:string;

  @Column()
  phoneNumber:number;

  @OneToMany(()=>Reservation, (reservations)=>reservations.userId)
  reservations:Reservation[] 
}

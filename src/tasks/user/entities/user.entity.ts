import { Reservation } from "src/tasks/reservations/entities/reservation.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users {
  @PrimaryGeneratedColumn({name:"user_id"})
  user_id:number;

  @Column()
  user_name:string;

  @Column()
  last_name:string;

  @Column()
  email:string;

  @Column()
  phone_number:number;

  @OneToMany(()=>Reservation, (reservations)=>reservations.user_id)
  reservations:Reservation[] 
}

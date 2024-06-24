import { Reservation } from "src/tasks/reservations/entities/reservation.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SessionEntity {
    @PrimaryGeneratedColumn()
    session_id: number;

    @Column()
    session_name: string;

    @Column({ type: 'time' })
    start_time: Date;

    @Column({ type: 'time' })
    end_time: Date;

    @OneToMany(()=>Reservation, (reservation)=>reservation.session_id)
  reservation:Reservation[] 
}

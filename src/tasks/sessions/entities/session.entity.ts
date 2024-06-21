import { Reservation } from "src/tasks/reservations/entities/reservation.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SessionEntity {
    @PrimaryGeneratedColumn()
    sessionId: number;

    @Column()
    name: string;

    @Column({ type: 'time' })
    startTime: Date;

    @Column({ type: 'time' })
    endTime: Date;

    @OneToMany(()=>Reservation, (reservations)=>reservations.sessions)
  reservation:Reservation[] 
}

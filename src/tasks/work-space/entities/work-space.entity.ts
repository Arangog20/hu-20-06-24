import { Reservation } from "src/tasks/reservations/entities/reservation.entity";
import { Room } from "src/tasks/rooms/entities/room.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class WorkSpace {
    @PrimaryGeneratedColumn()
    workSpaceId: number;

    @Column()
    positionRow: number;

    @Column()
    positionColumn: number;

    @OneToMany(()=>Reservation, (reservations)=>reservations.workSpaceId)
    reservations:Reservation[] 

    @ManyToOne(()=>Room, (roomId)=>roomId.workSpaces)
    roomId: Room;
}

import { Reservation } from "src/tasks/reservations/entities/reservation.entity";
import { Room } from "src/tasks/rooms/entities/room.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class WorkSpace {
    @PrimaryGeneratedColumn()
    workSpaceId: number;

    @Column()
    row: number;

    @Column()
    column: number;

    @OneToMany(()=>Reservation, (reservations)=>reservations.workSpaces)
    reservations:Reservation[] 

    @ManyToOne(()=>Room, (rooms)=>rooms.workSpaces)
    rooms: Room;
}

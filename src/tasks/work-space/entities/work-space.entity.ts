import { Reservation } from "src/tasks/reservations/entities/reservation.entity";
import { Room } from "src/tasks/rooms/entities/room.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class WorkSpace {
    @PrimaryGeneratedColumn()
    workspace_id: number;

    @Column()
    position_row: number;

    @Column()
    position_column: string;

    @OneToMany(()=>Reservation, (reservation)=>reservation.workspace_id)
    reservation:Reservation[] 

    @ManyToOne(()=>Room, (room_id)=>room_id.workspace_id)
    @JoinColumn({name:'room_id',})
    room_id: Room;
}

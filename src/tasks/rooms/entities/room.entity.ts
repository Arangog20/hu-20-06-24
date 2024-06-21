import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Room {
    
    @PrimaryGeneratedColumn()
    roomId: number;

    @Column()
    name: string;

    @Column()
    row_num: number;
    
    @Column()
    column_num: number;
}

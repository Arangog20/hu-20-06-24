import { WorkSpace } from "src/tasks/work-space/entities/work-space.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToMany(()=>WorkSpace, (workSpaces)=>workSpaces.rooms)
    workSpaces: WorkSpace[];
}

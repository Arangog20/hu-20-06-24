import { WorkSpace } from "src/tasks/work-space/entities/work-space.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Room {
    
    @PrimaryGeneratedColumn()
    room_id: number;

    @Column()
    room_name: string;

    @Column()
    row_num: number;
    
    @Column()
    column_num: number;

    @OneToMany(()=>WorkSpace, (work_space)=>work_space.room_id)
    workspace_id: WorkSpace[];
}

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class WorkSpace {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    workSpaceId: number;

    @Column()
    row: number;

    @Column()
    column: number;
}

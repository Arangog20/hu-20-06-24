import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Session {
    @PrimaryGeneratedColumn()
    sessionId: number;

    @Column()
    name: string;

    @Column({ type: 'time' })
    startTime: Date;

    @Column({ type: 'time' })
    endTime: Date;
}

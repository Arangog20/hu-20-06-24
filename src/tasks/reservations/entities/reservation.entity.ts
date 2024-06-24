import { SessionEntity } from "src/tasks/sessions/entities/session.entity";
import {  Users } from "src/tasks/user/entities/user.entity";
import { WorkSpace} from "src/tasks/work-space/entities/work-space.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export enum StatusEnum{
    CONFIRMED = 'confirmed',
    CANCELED = 'canceled', 
}

@Entity()
export class Reservation {

  @PrimaryGeneratedColumn()
  reservation_id: number;

  @ManyToOne(()=> Users, (userId) =>userId.reservations)
  @JoinColumn({name:'user_id',})
  user_id: Users;

  @ManyToOne(()=> SessionEntity, (session) => session.reservation)
  @JoinColumn({name:'session_id'})
  session_id: SessionEntity;

  @ManyToOne(()=> WorkSpace, (workSpaces) => workSpaces.reservation)
  @JoinColumn({name:'workspace_id'})
  workspace_id: WorkSpace ;

  @CreateDateColumn()
  reservation_date: Date;

  @Column({default: StatusEnum.CONFIRMED})
  status: StatusEnum;
}


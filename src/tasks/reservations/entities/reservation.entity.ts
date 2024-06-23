import { SessionEntity } from "src/tasks/sessions/entities/session.entity";
import { User } from "src/tasks/user/entities/user.entity";
import { WorkSpace} from "src/tasks/work-space/entities/work-space.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export enum Status{
    CONFIRMED = 'confirmed',
    CANCELED = 'canceled', 
}

@Entity()
export class Reservation {

  @PrimaryGeneratedColumn()
  reservationId: number;

  @ManyToOne(()=> User, (userId) =>userId.reservations)
  @JoinColumn({name:'userId',})
  userId: User;

  @ManyToOne(()=> SessionEntity, (session) => session.reservation)
  @JoinColumn({name:'sessionId'})
  sessionId: SessionEntity;

  @ManyToOne(()=> WorkSpace, (workSpaces) => workSpaces.reservations)
  @JoinColumn({name:'workSpaceId'})
  workSpaceId: WorkSpace ;

  @CreateDateColumn()
  reservationDate: Date;

  @Column({default: Status.CONFIRMED})
  status: Status;
}


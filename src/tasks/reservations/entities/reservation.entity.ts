import { SessionEntity } from "src/tasks/sessions/entities/session.entity";
import { User } from "src/tasks/user/entities/user.entity";
import { WorkSpace} from "src/tasks/work-space/entities/work-space.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export enum Status{
    CONFIRMED = 'confirmed',
    CANCELED = 'canceled',
    UNCONFIRMED = 'unconfirmed'  
}

@Entity()
export class Reservation {

  @PrimaryGeneratedColumn()
  reservationId: number;

  @ManyToOne(()=> User, (user) =>user.reservations)
  @JoinColumn({name:'userId',})
  user: User;

  @ManyToOne(()=> SessionEntity, (session) => session.reservation)
  @JoinColumn({name:'sessionId'})
  sessions: SessionEntity;

  @ManyToOne(()=> WorkSpace, (workSpaces) => workSpaces.reservations)
  @JoinColumn({name:'workSpaceId'})
  workSpaces: WorkSpace ;

  @Column()
  reservationDate: Date;

  @Column({default: Status.UNCONFIRMED})
  status: Status;
}


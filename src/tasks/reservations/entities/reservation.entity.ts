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

  @Column()
  userId: number;

  @Column()
  sessionId: number;

 @Column()
 workSpaceId: number;

  @Column()
  reservationDate: Date;

  @Column({default: Status.UNCONFIRMED})
  status: Status;
}


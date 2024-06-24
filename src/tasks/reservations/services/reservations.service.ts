import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateReservationDto } from '../dto/create-reservation.dto';
import { UpdateReservationDto } from '../dto/update-reservation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Reservation, StatusEnum } from '../entities/reservation.entity';
import { Repository } from 'typeorm';
import { WorkSpace } from 'src/tasks/work-space/entities/work-space.entity';
import { SessionEntity } from 'src/tasks/sessions/entities/session.entity';

@Injectable()
export class ReservationsService {
  constructor(
    @InjectRepository (Reservation)
    private readonly reservationRepository: Repository<Reservation>,
    @InjectRepository(WorkSpace)
    private readonly workspaceRepository: Repository<WorkSpace>,
    @InjectRepository(SessionEntity)
    private readonly sessionRepository: Repository<SessionEntity>,
  ) {}

/*   async available(session_id: number, room_id: number) {

    const session = await this.sessionRepository.findOne({
      where: { session_id },
      relations: ['reservations'],
    });

    if (!session) {
      throw new NotFoundException(`Session #${session_id} not found`);
    }

    const availableWorkspaces = await this.workspaceRepository.createQueryBuilder('workspace')
      .leftJoinAndSelect('workspace.reservations', 'reservation')
      .where('reservation.session_id = :session_id', { session_id })
      .andWhere('reservation.status != :status', { status: StatusEnum.CONFIRMED })
      .getMany();

    return availableWorkspaces;
  } */
  
    async available(room_id: number, session_id: number): Promise<WorkSpace> {
      return this.reservationRepository.query(`
        SELECT w.*
        FROM public.work_space w
        LEFT JOIN public.reservation r ON w.workspace_id = r.workspace_id
        WHERE w.room_id = $1 AND (r.session_id IS NULL OR r.status = 'canceled' OR r.session_id != $2)
      `, [room_id, session_id]);
    }
  async create(createReservationDto: CreateReservationDto) :Promise<Reservation> {
    try {
      const reservation = this.reservationRepository.create(createReservationDto);
      return await this.reservationRepository.save(reservation);
    } catch (error) {
      throw new ConflictException(`Reservation creation failed: ${error.message}`);
    }
  }

  async findAll(): Promise<Reservation[]> {
    try {
      return await this.reservationRepository.find();
    } catch (error) {
      throw new Error(`Error fetching reservations: ${error.message}`);
    }
  }

  async findOne(reservation_id: number): Promise<Reservation> {
    const reservation = await this.reservationRepository.findOne({ where: { reservation_id } });

    if (!reservation) {
      throw new NotFoundException('Reservation not found. Try again.');
    }

    return reservation;
  }

 

  
}

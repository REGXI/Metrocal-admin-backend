import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { QuoteRequest } from './quote-request.entity'

@Entity('equipment_quote_requests')
export class EquipmentQuoteRequest {
  @PrimaryGeneratedColumn('increment', { type: 'int' })
  id: number

  @ManyToOne(
    () => QuoteRequest,
    (quote_request) => quote_request.equipment_quote_request,
    {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  )
  quote_request: QuoteRequest

  @Column({ type: 'varchar' })
  name: string

  @Column({ type: 'varchar' })
  type_service: string

  @Column({ type: 'int' })
  count: number

  @Column({ type: 'varchar' })
  model: string

  @Column()
  measuring_range?: boolean

  @Column({ type: 'varchar' })
  calibration_method?: string

  @Column({ type: 'varchar' })
  additional_remarks?: string

  @Column({ type: 'int' })
  discount?: number

  @Column({ default: 'pending' })
  status?: string // done, rejected, pending
}

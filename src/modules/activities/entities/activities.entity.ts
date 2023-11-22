import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm'
import { User } from 'src/modules/users/entities/user.entity'
import { QuoteRequest } from 'src/modules/quotes/entities/quote-request.entity'

@Entity('activities')
export class Activity {
  @PrimaryGeneratedColumn('increment', { type: 'int' })
  id: number

  @OneToOne(() => QuoteRequest, (quoteRequest) => quoteRequest.activity)
  quote_request: QuoteRequest

  @ManyToMany(() => User, (user) => user.activities)
  @JoinTable()
  team_members?: User[]

  @Column({ type: 'varchar', default: 'pending' })
  status: string // pending, done, canceled

  @Column({ nullable: true, default: 0 })
  progress: number

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date

  @Column({ type: 'timestamp', nullable: true })
  updated_at: Date
}

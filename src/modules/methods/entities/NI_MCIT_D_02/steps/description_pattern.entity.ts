import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { NI_MCIT_D_02 } from '../NI_MCIT_D_02.entity'

@Entity('description_pattern_NI_MCIT_D_02')
export class DescriptionPatternNI_MCIT_D_02 {
  @PrimaryGeneratedColumn('increment')
  id: number

  @OneToMany(
    () => NI_MCIT_D_02,
    (NI_MCIT_D_02) => NI_MCIT_D_02.pattern_description,
    {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  )
  NI_MCIT_D_02: NI_MCIT_D_02[]

  @Column({ nullable: true })
  NI_MCPD_01?: string

  @Column({ nullable: true })
  NI_MCPD_02?: string

  @Column({ nullable: true })
  NI_MCPD_03?: string

  @Column({ nullable: true })
  NI_MCPD_04?: string
}

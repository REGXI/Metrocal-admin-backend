import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class CreateEquipmentRegisterDto {
  @ApiProperty()
  @IsNotEmpty()
  type_service:string

  @ApiProperty()
  @IsNotEmpty()
  equipment: string[]

  @ApiProperty()
  @IsNotEmpty()
  measuring_range:string[]

  /*@ApiProperty()
  @IsNotEmpty()
  IVA:number*/
}

export class CreateIvaRegisterDto{
  @ApiProperty()
  IVA:number

}
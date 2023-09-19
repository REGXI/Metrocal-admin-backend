import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'
import { QuoteRequest } from '../entities/quote-request.entity'
import { User } from 'src/modules/users/entities/user.entity'

export class CreateQuoteDto {
  @ApiProperty()
  @IsNotEmpty()
  quote_requests: QuoteRequest

  @ApiProperty()
  @IsNotEmpty()
  workers: User[]

  @ApiProperty()
  @IsNotEmpty()
  status: 'active' | 'inactive'
}
import { Controller } from '@nestjs/common'
import { QuotesService } from './quotes.service'
import { ApiTags } from '@nestjs/swagger'
import { Post, Body, Get } from '@nestjs/common'
import { QuoteRequestDto } from './dto/quote-request.dto'

@ApiTags('quotes')
@Controller('quotes')
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) {}

  @Post('request')
  async createQuoteRequest(@Body() quoteRequestDto: QuoteRequestDto) {
    quoteRequestDto.status = 'pending'
    return await this.quotesService.createQuoteRequest(quoteRequestDto)
  }

  @Get('request/all')
  async getAllQuoteRequest() {
    return await this.quotesService.getAllQuoteRequest()
  }

  @Post('request/reject')
  async rejectQuoteRequest(@Body() id: number) {
    return await this.quotesService.rejectQuoteRequest(id)
  }

  @Get('request/:id')
  async getQuoteRequestById(@Body() id: number) {
    return await this.quotesService.getQuoteRequestById(id)
  }
}

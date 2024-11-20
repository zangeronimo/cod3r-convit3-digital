import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Post,
} from '@nestjs/common';
import {
  DateEvent,
  Event,
  Guest,
  complementaryEvent,
  complementaryGuest,
} from 'core';
import { EventPrisma } from './event.prisma';

@Controller('events')
export class EventsController {
  constructor(readonly repository: EventPrisma) {}

  @Post()
  async saveEvent(@Body() data: Event) {
    const event = await this.repository.findByKey(data.alias);
    if (event && event.id !== data.id) {
      throw new HttpException('Já existe um evento com esse alias', 400);
    }
    const fullEvent = complementaryEvent(this.parse(data));
    const savedEvent = await this.repository.save(fullEvent);
    return this.serialize(await this.repository.findByKey(savedEvent.id, true));
  }

  @Post(':alias/convidado')
  async saveGuest(@Param('alias') alias: string, @Body() data: Guest) {
    const event = await this.repository.findByKey(alias);
    if (!event) {
      throw new HttpException('Evento não encontrado!', 400);
    }
    await this.repository.saveGuest(event, complementaryGuest(data));
    return this.serialize(await this.repository.findByKey(event.id, true));
  }

  @Post('access')
  async accessEvent(@Body() data: { id: string; password: string }) {
    const event = await this.repository.findByKey(data.id);
    if (!event || event.password !== data.password) {
      throw new HttpException('Evento ou senha inválida!', 401);
    }

    return this.serialize(event);
  }

  @Get()
  async getAll() {
    const events = await this.repository.getAll();
    return events.map(this.serialize);
  }

  @Get(':key')
  async getEvent(@Param('key') key: string) {
    const event = await this.repository.findByKey(key);

    return this.serialize(event);
  }

  @Get('validate/:alias/:id')
  async aliasValidate(@Param('alias') alias: string, @Param('id') id: string) {
    const event = await this.repository.findByKey(alias);
    return { valid: !event || event.id === id };
  }

  private serialize(event: Event) {
    if (!event) return null;
    return {
      ...event,
      date: DateEvent.format(event.date),
    };
  }

  private parse(event: Event) {
    if (!event) return null;
    return {
      ...event,
      date: DateEvent.parse(event.date.toString()),
    };
  }
}

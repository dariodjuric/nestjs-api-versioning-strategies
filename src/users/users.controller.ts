import { Controller, Get, Param, Version } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  @Version('1')
  findAll() {
    return 'findAll()';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `findOne(${id})`;
  }
}

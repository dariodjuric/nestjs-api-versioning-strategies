import { Controller, Get, Param, Version } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  @Version('2')
  findAll2() {
    return 'findAll2()';
  }

  @Get()
  @Version('1')
  findAll1() {
    return 'findAll1()';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `findOne(${id})`;
  }
}

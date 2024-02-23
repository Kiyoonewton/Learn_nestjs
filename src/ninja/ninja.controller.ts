import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjaService } from './ninja.service';

@Controller('ninjas')
export class NinjaController {
  constructor(private readonly ninjaService: NinjaService) {}
  // GET /ninjas --> []
  @Get()
  getNinjas(@Query('weapon') weapon: 'stars' | 'nunchucks') {
    return this.ninjaService.getNinjas(weapon);
  }

  //Get /ninjas/:id --> {...}
  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    return this.ninjaService.getNinja(+id);
  }

  // POST /ninjas
  @Post()
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
    return this.ninjaService.createNinja(createNinjaDto);
  }

  // PUT /ninjas/:id --> { ... }
  @Put(':id')
  updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
    return this.ninjaService.updateNinja(+id, updateNinjaDto);
  }

  // DELETE /ninjas/:id
  @Delete(':id')
  removeNinja(@Param('id') id: string) {
    return this.ninjaService.removeNinja(+id);
  }
}

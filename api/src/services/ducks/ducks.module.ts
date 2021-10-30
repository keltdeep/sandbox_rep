import {Module} from '@nestjs/common';
import {DucksController} from '../../controllers/ducks/ducks.controller';
import {DucksService} from './ducks.service';

@Module({
  imports: [],
  controllers: [DucksController],
  providers: [DucksService]
})
export class DucksModule {}

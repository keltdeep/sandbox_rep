import {IsString, IsInt, IsNotEmpty} from 'class-validator';
import {ApiProperty} from '@nestjs/swagger';

export class DuckDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  type: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  user: string;
}

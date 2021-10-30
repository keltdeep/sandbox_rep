import {IsString, IsInt, IsNotEmpty} from 'class-validator';

export class VerifyCodeDto {
    @IsNotEmpty()
    @IsString()
    key: string;

    @IsNotEmpty()
    @IsInt()
    value: number;
}

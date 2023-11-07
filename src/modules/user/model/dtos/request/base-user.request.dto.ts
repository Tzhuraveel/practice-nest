import { IsNotEmpty } from 'class-validator';

export class BaseUserRequestDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;
}

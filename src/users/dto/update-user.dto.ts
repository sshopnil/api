import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateUserDTO{
    @IsString()
    @ApiProperty({
        name: 'user_role',
        description: "User's role in the application",
        type: String,
        example: 'general or exclusive',
      })
    user_role: string;
}
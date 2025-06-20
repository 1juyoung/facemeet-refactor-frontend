interface UserDto {
  id: string;
  email: string;
  nickname: string;
  state: boolean;
  participant: string[];
}

export class GetUserDto {
  constructor(
    public success: boolean,
    public data?: UserDto,
    public error?: string
  ) {}
}

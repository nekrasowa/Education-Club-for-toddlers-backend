import { Controller, Get } from '@nestjs/common';
import { Post, Body } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { ForgotPassDto } from './dto/forgotPass.dto';
// import { MailService } from '../mail/mail.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    // private readonly mailService: MailService
  ) {}

  @Get()
  getUserList() {
    return this.authService.getUserList();
  }

  @Post('login')
  login(@Body() body: LoginDto) {
    return this.authService.login(body);
  }

  @Post('register')
  register(@Body() body: RegisterDto) {
    return this.authService.register(body);
  }

  @Post('forgot-pass')
  forgotPassword(@Body() body: ForgotPassDto) {
    return this.authService.forgotPassword(body);
  }

  
}

import {
  ConflictException,
  Injectable,
  UnauthorizedException
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { RegisterDto } from './dto/register.dto';
import { UserRole } from '../enums/user-role.enum';
import * as bcrypt from 'bcrypt';
import { ForgotPassDto } from './dto/forgotPass.dto';
import { MailService } from '../mail/mail.service';
import { createHash, randomBytes } from 'crypto';
import { PasswordResetToken } from './entities/reset-token.entity';
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @InjectRepository(PasswordResetToken)
    private readonly passwordResetTokenRepository: Repository<PasswordResetToken>,

    private readonly mailService: MailService,

    private readonly jwtService: JwtService
  ) {}

  // убрать после проверок
  async getUserList() {
    return await this.userRepository.find();
  }

  async login(body: LoginDto) {
    const user = await this.userRepository.findOne({
      where: {
        email: body.email
      }
    });

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordValid = await bcrypt.compare(body.password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const payload = {
      sub: user.id,
      role: user.role
    };

    return {
      access_token: this.jwtService.sign(payload)
    };
  }

  async register(body: RegisterDto) {
    const user = await this.userRepository.findOne({
      where: {
        email: body.email
      }
    });

    if (user) {
      throw new ConflictException('User already exists');
    }

    const hashedPassword = await bcrypt.hash(body.password, 10);

    const newUser = this.userRepository.create({
      email: body.email,
      password: hashedPassword,
      role: UserRole.PARENT,
      first_name: body.first_name,
      last_name: body.last_name
    });
    const savedUser = await this.userRepository.save(newUser);

    const payload = {
      sub: savedUser.id,
      role: savedUser.role
    };
    const access_token = this.jwtService.sign(payload);

    return {
      user: {
        id: savedUser.id,
        email: savedUser.email,
        role: savedUser.role,
        first_name: savedUser.first_name,
        last_name: savedUser.last_name
      },
      access_token
    };
  }

  async forgotPassword(body: ForgotPassDto) {
    const user = await this.userRepository.findOne({
      where: {
        email: body.email
      }
    });

    if (user) {
      const resetToken = randomBytes(32).toString('hex');

      const tokenHash = createHash('sha256').update(resetToken).digest('hex');

      const resetTokenEntity = this.passwordResetTokenRepository.create({
        tokenHash,
        userId: user.id,
        expiresAt: new Date(Date.now() + 30 * 60 * 1000)
      });

      await this.passwordResetTokenRepository.save(resetTokenEntity);

      await this.mailService.sendPasswordResetEmail(user.email, resetToken);
    }

    return {
      message:
        'If this email is registered, you will receive a password reset link.'
    };
  }
}

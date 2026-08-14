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

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    private readonly jwtService: JwtService
  ) {}

  async login(body: LoginDto) {
    const user = await this.userRepository.findOne({
      where: {
        email: body.email
      }
    });

    if (!user) {
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
      email: savedUser.email,
      role: savedUser.role
    };

    const accessToken = this.jwtService.sign(payload);

    return {
      user: {
        id: savedUser.id,
        email: savedUser.email,
        role: savedUser.role,
        first_name: savedUser.first_name,
        last_name: savedUser.last_name
      },
      accessToken
    };
  }
}

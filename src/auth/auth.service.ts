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

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

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

  async updatePassword(body: ForgotPassDto) {
    const user = await this.userRepository.findOne({
      where: {
        email: body.email
      }
    });

    

    // логика посылания сообщения со ссылкой на форму  + отдельный метод для смены пароля

    return //НА ФРОНТЕ ПОКАЗАТЬ "если пользователь существует на указанный email выслана ссылка с формой для смены пароля"
  }
}

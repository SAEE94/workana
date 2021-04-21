import { CustomLoggerService } from '@shared/logger/logger.service';
import { User } from '@model/user/user';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { UserUseCase } from '@domain/usecase/user/user.usecase';
import { UserDTO } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(
    private userUseCase: UserUseCase,
    private loggerService: CustomLoggerService,
  ) {
    this.loggerService.setContext(UserController.name);
    this.loggerService.log('init UserController');
  }

  @Post()
  createUser(@Body() userDTO: UserDTO, @Res() response: Response) {
    this.userUseCase.save({ ...userDTO, id: null }).then((userDB) => {
      response.status(HttpStatus.OK).send({ ...userDB });
    });
  }

  @Put(':id')
  updateUser(
    @Param('id') id: string,
    @Body() userDTO: UserDTO,
    @Res() response: Response,
  ) {
    const idUser = parseInt(id);
    this.userUseCase
      .update(idUser, { ...userDTO, id: idUser })
      .then((userDB) => {
        response.status(HttpStatus.OK).send(userDB);
      });
  }

  @Get()
  findAll(@Res() response: Response) {
    this.userUseCase.findAll().then((usersDB) => {
      response.status(HttpStatus.OK).send(usersDB);
    });
  }

  @Delete(':id')
  delete(@Param('id') id: string, @Res() response: Response) {
    const user = new User(parseInt(id), null, null, null);

    this.userUseCase.delete(user).then((usersDB) => {
      response.status(HttpStatus.OK).send(usersDB);
    });
  }
}

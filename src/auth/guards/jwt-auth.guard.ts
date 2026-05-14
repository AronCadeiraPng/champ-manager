import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector,
  private readonly jwtService: JwtService,
  ) {
    super();
  }

  async canActivate(
    context: ExecutionContext,
  ):  Promise<boolean> {
    const isPublic = this.reflector.get('isPublic', context.getHandler());
    const request = context.switchToHttp().getRequest();

    if (isPublic) {
      return true;
    }

    const accessToken = request.cookies.accessToken;
   
    if (!accessToken) {
      return false;
    }

    try {
      const payload = await this.jwtService.verifyAsync(accessToken, {secret:process.env.JWT_SECRET});
      request['user'] = payload;
    } catch {
      throw new UnauthorizedException();
    }

    return true;
  }
}

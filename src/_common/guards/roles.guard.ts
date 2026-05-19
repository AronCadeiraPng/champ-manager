import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserRolesEnum } from '../enums/user-roles.enum';
import { ForbiddenException } from '../exceptions';
import { ROLES_KEY } from '../../_decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean{
        const requiredRoles = this.reflector.getAllAndOverride<UserRolesEnum[]>(ROLES_KEY, 
        [
            context.getHandler(), 
            context.getClass()
        ]);

        console.log(requiredRoles)

        if (!requiredRoles) return true;
        const { user } = context.switchToHttp().getRequest();
        console.log(user)
        if(!requiredRoles.includes(user.role)) {
            throw new ForbiddenException('acessar a este recurso')
        }
        
        return true;
        }
    }
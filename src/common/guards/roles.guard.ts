import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { UserRoles } from "../enums/user-roles.enum";
import { ROLES_KEY } from "src/decorators/roles.decorator";
import { ForbiddenException } from "../exceptions";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean{
        const requiredRoles = this.reflector.getAllAndOverride<UserRoles[]>(ROLES_KEY, 
        [
            context.getHandler(), 
            context.getClass()
        ]);

        if (!requiredRoles) return true;
        const { user } = context.switchToHttp().getRequest();
        if(!requiredRoles.includes(user.role)) {
            throw new ForbiddenException('acesso a este recurso')
        }
        
        return true;
        }
    }
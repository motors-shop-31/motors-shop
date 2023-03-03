import { Router } from 'express';
import { UserForgotPasswordController, UserResetPasswordController, UserVerifyPwController } from '../Controllers/user.controllers';

const sessionRoutes = Router();
export const sessionsRoutes = () => {
    sessionRoutes.post('/forgot/verify', UserVerifyPwController);
    sessionRoutes.patch('/forgot', UserForgotPasswordController);
    sessionRoutes.patch('/forgot/:code', UserResetPasswordController);
    return sessionRoutes
}
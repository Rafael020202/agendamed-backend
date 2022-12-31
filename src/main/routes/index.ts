import { Router } from 'express';

import {
  makeSignUpController,
  makeLoginController,
  makeListDoctorsByLocationController,
  makeAddToScheduleController,
  makeCreateAppointmentController,
  makeListScheduleController,
  makeListAppointmentController,
  makeListUserInfoController,
  makeAuthMiddleware,
} from '@/main/factories';
import {
  expressRouteDecorator,
  expressMiddlewareDecorator,
} from '@/main/decorators';

const router = Router();

router.post('/signup', expressRouteDecorator(makeSignUpController()));
router.post('/signin', expressRouteDecorator(makeLoginController()));

router.get(
  '/doctors',
  expressMiddlewareDecorator(makeAuthMiddleware()),
  expressRouteDecorator(makeListDoctorsByLocationController())
);

router.get(
  '/user',
  expressMiddlewareDecorator(makeAuthMiddleware()),
  expressRouteDecorator(makeListUserInfoController())
);

router.post(
  '/schedule',
  expressMiddlewareDecorator(makeAuthMiddleware()),
  expressRouteDecorator(makeAddToScheduleController())
);
router.get(
  '/schedule',
  expressMiddlewareDecorator(makeAuthMiddleware()),
  expressRouteDecorator(makeListScheduleController())
);

router.post(
  '/appointment',
  expressMiddlewareDecorator(makeAuthMiddleware()),
  expressRouteDecorator(makeCreateAppointmentController())
);
router.get(
  '/appointment',
  expressMiddlewareDecorator(makeAuthMiddleware()),
  expressRouteDecorator(makeListAppointmentController())
);

export default router;

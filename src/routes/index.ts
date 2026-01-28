import { Router } from 'express';
import userRouter from './user';
import debankRouter from './debank';
import zeroxRouter from './zerox';
import aiRouter from './ai';
import checkinRouter from './checkin';
import leaderboardRouter from './leaderboard';
import referralRouter from './referral';
import swapRouter from './swap';

const router = Router();

router.use('/user', userRouter);
router.use('/debank', debankRouter);
router.use('/zerox', zeroxRouter);
router.use('/ai-interaction', aiRouter);
router.use('/checkin', checkinRouter);
router.use('/leaderboard', leaderboardRouter);
router.use('/referral', referralRouter);
router.use('/swap', swapRouter);

export default router;

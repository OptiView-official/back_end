import { Router } from 'express';

const router = Router();

router.get('/points', (req, res) => {
  res.json({
    data: [
      { rank: 1, address: "0xABC...DEF", points: 5000 },
      { rank: 2, address: "0x123...456", points: 4500 }
    ]
  });
});

router.get('/referrals', (req, res) => {
  res.json({
    data: [
      { rank: 1, address: "0xABC...DEF", referrals: 50 },
      { rank: 2, address: "0x123...456", referrals: 45 }
    ]
  });
});

export default router;

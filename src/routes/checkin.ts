import { Router } from 'express';

const router = Router();

router.get('/status', (req, res) => {
  res.json({ data: { isCheckedIn: false, streak: 3 } });
});

router.post('/checkin', (req, res) => {
  res.json({ data: { success: true, points: 10 } });
});

router.get('/history', (req, res) => {
  res.json({
    data: [
      { date: "2023-10-01", points: 10 },
      { date: "2023-10-02", points: 10 }
    ]
  });
});

export default router;

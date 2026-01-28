import { Router } from 'express';

const router = Router();

router.get('/status', (req, res) => {
  res.json({ data: { remaining: 5, total: 10 } });
});

router.get('/history', (req, res) => {
  res.json({
    data: [
      { id: "1", query: "Analyze my portfolio", response: "Your portfolio looks balanced.", timestamp: new Date().toISOString() }
    ]
  });
});

export default router;

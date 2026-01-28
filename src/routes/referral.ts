import { Router } from 'express';

const router = Router();

router.get('/stats', (req, res) => {
  res.json({ data: { totalReferrals: 5, totalPoints: 250 } });
});

router.get('/invitees', (req, res) => {
  res.json({
    data: [
      { address: "0xInvitee1", date: "2023-10-01" }
    ]
  });
});

router.post('/bind', (req, res) => {
  res.json({ data: { success: true } });
});

router.get('/my-codes', (req, res) => {
  res.json({ data: ["CODE123", "CODE456"] });
});

router.post('/generate-code', (req, res) => {
  res.json({ data: { code: "NEWCODE789" } });
});

export default router;

import { Router } from 'express';

const router = Router();

// GET /api/user/info
router.get('/info', (req, res) => {
  const { address } = req.query;
  if (!address) {
    return res.status(400).json({ error: 'Missing required parameter: address' });
  }

  res.json({
    data: {
      address: address,
      totalPoints: 1250,
      isFirstConnected: false,
      firstConnectTime: new Date(Date.now() - 86400000).toISOString(),
      referrer: "0xMockReferrer",
      displayName: "MockUser",
      usernameChangeCount: 0,
      stats: {
        totalCheckIns: 12,
        totalAIInteractions: 45,
        totalReferrals: 5,
        rank: 10
      }
    }
  });
});

// GET /api/user/first-connect
router.get('/first-connect', (req, res) => {
  res.json({ data: { success: true, message: "Recorded first connection" } });
});

// GET /api/user/points-history
router.get('/points-history', (req, res) => {
  res.json({
    data: [
      { type: "checkin", points: 10, timestamp: new Date().toISOString() },
      { type: "referral", points: 50, timestamp: new Date(Date.now() - 3600000).toISOString() }
    ]
  });
});

// POST /api/user/update-username
router.post('/update-username', (req, res) => {
  res.json({ data: { success: true, username: req.body.username } });
});

export default router;

import { Router } from 'express';

const router = Router();

router.get('/quote', (req, res) => {
  res.json({
    data: {
      price: 1800.50,
      estimatedGas: 50000,
      toAmount: 1.5
    }
  });
});

router.get('/price', (req, res) => {
  res.json({ data: { price: 1800.50 } });
});

export default router;

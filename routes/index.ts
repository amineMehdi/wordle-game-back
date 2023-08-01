import express, { Router, Request, Response } from 'express';

var router: Router = express.Router();

/* GET home page. */
router.get('/', function(req: Request, res: Response, next: any) {
  res.send('Hello World');
});


export default router;
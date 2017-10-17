import {Router} from 'express';
import * as MeetupController from './controller';

const router = new Router();

router.get('/meetups', MeetupController.fetchMeetups);
router.post('/meetups/new', MeetupController.createMeetup);


export default router;
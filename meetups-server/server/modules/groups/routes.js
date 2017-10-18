import Router from 'express';
import * as GroupController from './controller';

const router = Router();

router.post('/groups/new', GroupController.createGroup);
router.post('/groups/:groupId/meetups/new', GroupController.createGroupMeetup);
router.get('/groups/:groupId/meetups/', GroupController.getGroupMeetups);

export default router;
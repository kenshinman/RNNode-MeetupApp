import Router from 'express';
import * as GroupController from './controller';

const router = Router();

router.post('/groups/new', GroupController.createGroup);
router.post('/groups/:groupId/meetups/new', GroupController.createGroupMeetup);

export default router;
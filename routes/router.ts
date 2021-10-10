import express from 'express';
import controller from '../controllers/note';

const router = express.Router();

router.post('/create/note', controller.createNote);
router.get('/get/notes', controller.getAllNotes);

export = router;
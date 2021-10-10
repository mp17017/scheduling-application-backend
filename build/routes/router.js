"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = __importDefault(require("express"));
var note_1 = __importDefault(require("../controllers/note"));
var router = express_1.default.Router();
router.post('/create/note', note_1.default.createNote);
router.get('/get/notes', note_1.default.getAllNotes);
module.exports = router;

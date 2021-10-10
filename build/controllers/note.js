"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var note_1 = __importDefault(require("../models/note"));
var createNote = function (req, res, next) {
    var _a = req.body, name = _a.name, description = _a.description;
    var note = new note_1.default({
        _id: new mongoose_1.default.Types.ObjectId(),
        name: name,
        description: description
    });
    return note
        .save()
        .then(function (result) {
        return res.status(201).json({
            note: result
        });
    })
        .catch(function (error) {
        return res.status(500).json({
            message: error.message,
            error: error
        });
    });
};
var getAllNotes = function (req, res, next) {
    note_1.default.find()
        .exec()
        .then(function (notes) {
        return res.status(200).json({
            notes: notes,
            count: notes.length
        });
    })
        .catch(function (error) {
        return res.status(500).json({
            message: error.message,
            error: error
        });
    });
};
exports.default = { createNote: createNote, getAllNotes: getAllNotes };

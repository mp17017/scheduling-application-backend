import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Note from '../models/note';

const createNote = (req: Request, res: Response, next: NextFunction) => {
    let { name, description } = req.body;

    const note = new Note({
        _id: new mongoose.Types.ObjectId(),
        name,
        description     
    });

    return note
        .save()
        .then((result) => {
            return res.status(201).json({
                note: result
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

const getAllNotes = (req: Request, res: Response, next: NextFunction) => {
    Note.find()
        .exec()
        .then((notes) => {
            return res.status(200).json({
                notes: notes,
                count: notes.length
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

export default { createNote, getAllNotes };
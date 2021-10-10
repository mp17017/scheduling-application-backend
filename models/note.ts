import mongoose, { Schema } from 'mongoose';
import logging from '../config/logging';
import INote from '../interfaces/note';

const NoteSchema: Schema = new Schema (
    {
        name: {type: String, required: true},
        description: {type: String, required: true }
    },
    {
        timestamps: true
    }
);

NoteSchema.post<INote>('save', function(){
    logging.info('Mongo', 'New Post');
});

export default mongoose.model<INote>('Note', NoteSchema);
import { Document } from 'mongoose';

export default interface Inote extends Document {
    name: string;
    description: string;
}
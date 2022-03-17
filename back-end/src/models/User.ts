import { Schema, model } from 'mongoose';
import { IUser } from '../interfaces/users/user.interface';

const userSchema = new Schema<IUser>({
    username: {
        type: 'string',
        required: true,
    },
    email: {
        type: 'string',
        required: true,
    },
    password: {
        type: 'string',
        required: true,
    },
});

const userModel = model<IUser>('users', userSchema);

export default userModel;
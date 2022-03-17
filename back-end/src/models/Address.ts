import { Schema, model } from 'mongoose';
import { IAddress } from '../interfaces/address/address';

const addressSchema = new Schema<IAddress>({
    short_url: {
        type: 'string',
    },
    url: {
        type: 'string',
        required: true,
    },
    count: {
        type: Number,
        default: 0,
    },
    userId: {
      type: 'string',
      default: '',
  },
});

const addressModel = model<IAddress>('addresses', addressSchema);

export default addressModel;
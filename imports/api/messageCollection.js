import { Mongo } from 'meteor/mongo';

export const messageCollection = new Mongo.Collection('messages');
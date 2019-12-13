import * as mongoose from 'mongoose'
const Schema = mongoose.Schema

export interface Log extends mongoose.Document{
    timestamp: string,
    text: string
}

export interface LogModel extends mongoose.Model<Log>{
    
}

const LogSchema = new Schema({
    timestamp: {
        type: String,
        allowNull: false
    },
    text: {
        type: String,
        allowNull: false
    }
})

export const LogModel = mongoose.model<Log, LogModel>('log', LogSchema)
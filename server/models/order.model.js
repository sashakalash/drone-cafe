"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let OrderSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    dish: {
        type: Schema.Types.ObjectId,
        ref: 'Dish'
    },
    status: {
        type: String,
        enum: ["Заказано", "Готовится", "Доставляется", "Возникли сложности", "Подано"]
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Order', OrderSchema);
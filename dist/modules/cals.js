"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcTotalPrice = void 0;
const calcTotalPrice = ({ price, count, title, option: { weight } }) => {
    const totalPrice = price * count;
    const totalWeight = weight * count;
    return `${title}: ценa ${totalPrice}, общий вес ${totalWeight}`;
};
exports.calcTotalPrice = calcTotalPrice;

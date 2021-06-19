"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const contactLSchema = new Schema({
    FullName: String,
    EmailAddress: String,
    ContactNumber: String,
}, {
    collection: "contact_list"
});
const Model = mongoose_1.default.model("contact_list", contactLSchema);
exports.default = Model;
//# sourceMappingURL=contactL.js.map
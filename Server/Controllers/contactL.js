"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessDeletePage = exports.ProcessAddPage = exports.ProcessEditPage = exports.DisplayAddPage = exports.DisplayEditPage = exports.DisplaycontactLListPage = void 0;
const contactL_1 = __importDefault(require("../Models/contactL"));
const Util_1 = require("../Util");
function DisplaycontactLListPage(req, res, next) {
    contactL_1.default.find((err, contactLCollection) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Business Contact List', page: 'contact-list', contactL: contactLCollection, displayName: Util_1.UserDisplayName(req) });
    });
}
exports.DisplaycontactLListPage = DisplaycontactLListPage;
function DisplayEditPage(req, res, next) {
    let id = req.params.id;
    contactL_1.default.findById(id, {}, {}, (err, contactLItemToEdit) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Edit', page: 'update', contactL: contactLItemToEdit, displayName: Util_1.UserDisplayName(req) });
    });
}
exports.DisplayEditPage = DisplayEditPage;
function DisplayAddPage(req, res, next) {
    res.render('index', { title: 'Add', page: 'update', contactL: '', displayName: Util_1.UserDisplayName(req) });
}
exports.DisplayAddPage = DisplayAddPage;
function ProcessEditPage(req, res, next) {
    let id = req.params.id;
    let updatedcontactLItem = new contactL_1.default({
        "_id": id,
        "FullName": req.body.FullName,
        "EmailAddress": req.body.EmailAddress,
        "ContactNumber": req.body.ContactNumber,
    });
    contactL_1.default.updateOne({ _id: id }, updatedcontactLItem, {}, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contact-list');
    });
}
exports.ProcessEditPage = ProcessEditPage;
function ProcessAddPage(req, res, next) {
    let newContact = new contactL_1.default({
        "FullName": req.body.FullName,
        "EmailAddress": req.body.EmailAddress,
        "ContactNumber": req.body.ContactNumber,
    });
    contactL_1.default.create(newContact, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contact-list');
    });
}
exports.ProcessAddPage = ProcessAddPage;
function ProcessDeletePage(req, res, next) {
    let id = req.params.id;
    contactL_1.default.remove({ _id: id }, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contact-list');
    });
}
exports.ProcessDeletePage = ProcessDeletePage;
//# sourceMappingURL=contactL.js.map
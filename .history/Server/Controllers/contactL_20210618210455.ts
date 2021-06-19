import express, { Request, Response, NextFunction } from 'express';

// contactL Model Reference - db.contactL
import contactL from '../Models/clothing';

//import util functions
import{UserDisplayName }from '../Util';

// Display Functions

//(R)ead in CRUD
export function DisplaycontactLListPage(req: Request, res: Response, next: NextFunction): void
{
    // db.contactL.find()
    contactL.find({}, null, {sort: {FullName: 1}},(err, contactLCollection) =>
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        
        res.render('index', { title: 'Business Contact List', page: 'contact-list', contactL: contactLCollection, displayName: UserDisplayName(req)  });
    });
}

// Display (E)dit page
export function DisplayEditPage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

    // pass the id to the db

    // db.contactL.find({"_id": id})

    contactL.findById(id, {}, {}, (err, contactLItemToEdit) => 
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }

        // show the edit view
        res.render('index', { title: 'Edit', page: 'update', contactL: contactLItemToEdit, displayName: UserDisplayName(req)  });
    });
}

// Display (C)reate page
export function DisplayAddPage(req: Request, res: Response, next: NextFunction): void
{
    // show the edit view
    res.render('index', { title: 'Add', page: 'update', contactL: '', displayName: UserDisplayName(req) });
}

// Process Functions

// Process (E)dit page
export function ProcessEditPage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

    // instantiate a new contactL Item
    let updatedcontactLItem = new contactL
    ({
      "_id": id,
      "FullName": req.body.FullName,
    "EmailAddress": req.body.EmailAddress,
    "ContactNumber": req.body.ContactNumber,
    });
  
    // find the contactL item via db.contactL.update({"_id":id}) and then update
    contactL.updateOne({_id: id}, updatedcontactLItem, {}, (err) =>{
      if(err)
      {
        console.error(err);
        res.end(err);
      }
  
      res.redirect('/contact-list');
    });
}

// Process (C)reate page
export function ProcessAddPage(req: Request, res: Response, next: NextFunction): void
{
  // instantiate a new contactL
  let newContact = new contactL
  ({
    
    "FullName": req.body.FullName,
    "EmailAddress": req.body.EmailAddress,
    "ContactNumber": req.body.ContactNumber,
    
  });

  // db.contactL.insert({contactL data is here...})
  contactL.create(newContact, (err) => {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    res.redirect('/contact-list');
  });
}

// Process (D)elete page
export function ProcessDeletePage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

  // db.contactL.remove({"_id: id"})
  contactL.remove({_id: id}, (err) => {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    res.redirect('/contact-list');
  });
}
/**
 * Module dependencies.
 *  File name: index.ts, 
    Student's name: Ofovwe Ewere
    Student's id: 301188196
    Date: June 14, 2021
 */
import express , {Request, Response, NextFunction} from 'express';
import * as DBConfig from '../Config/db';

export function UserDisplayName(req: Request): string
{
    if(req.user)
    {
        let user = req.user as UserDocument;
        return user.displayName.toString();
    }
    return '';
}

export function AuthGuard(req: Request, res: Response, next: NextFunction): void
{
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}
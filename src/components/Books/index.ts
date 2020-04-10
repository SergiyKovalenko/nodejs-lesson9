import { Request, Response, NextFunction } from 'express';
import { BooksService } from './service';
import { IData } from './interfaces';

export default class BooksComponent {
    /**
     * @function
     * @param {express.Request} req
     * @param {express.Response} res
     * @param {express.NextFunction} next
     * @returns {Promise Response <IData>}
     */
    static async chart(req: Request, res: Response, next: NextFunction) : Promise<Response <IData>> {
        try {
            const data = await BooksService.getChartData();
            return res.status(200).json({ data });
        } catch (error) {
            return res.status(500).json({
                message: error.name,
                details: error.message,
            });
            next(error);
        }
    }
    /**
     * @function
     * @param {express.Request} req
     * @param {express.Response} res
     * @param {express.NextFunction} next
     * @returns {Promise < any >}
     */
    static async map(req: Request, res: Response, next: NextFunction) : Promise < any > {
        try {
            return res.status(200).render('index');
        } catch (error) {
             return res.status(500).json({
                message: error.name,
                details: error.message,
            });
            next(error);
        }
    }
}
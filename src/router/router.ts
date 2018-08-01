import { Router, Request, Response } from 'express';
import MySQL from '../mysql/mysql';

const router = Router();
router.get('/heroes', (req: Request, res: Response) => {

    const query = "select * from Heroes";

    MySQL.ejecutarQuery(query, (err: any, heroes: Object[]) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            })
        } else {
            res.json({
                ok: true,
                heroes: heroes
            });
        }

    });

 
});
router.get('/heroes/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const id_Escapado=MySQL.instance.conn.escape(id);
    const query = `select * from Heroes where id_heroe=${id_Escapado}`;

    MySQL.ejecutarQuery(query, (err: any, heroe: Object[]) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            })
        } else {
            res.json({
                ok: true,
                heroe: heroe[0]
            });
        }

    });
});

export default router;
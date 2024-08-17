import { pool } from "../db.js";

export const getUsers = async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM public."Users"');
        return res.json(rows);
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" })
    }
}

export const getUserById = async (req, res) => {

    try {
        const { id } = req.params;
        const { rows } = await pool.query('SELECT * FROM public."Users" where id = $1', [id]);
        console.log(rows);
        if (rows.length === 0) {
            return res.status(404).json({ message: "User not found" });
        } else {
            res.json(rows);
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Something goes wrong" })
    }
}


export const createUser = async (req, res) => {
    try {
        const params = req.body;
    const { rows } = await pool.query('INSERT INTO public."Users" (nit, razon_social, correo, telefono, usuario_responsable, fecha_creacion, estado, usertype) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *', [params.nit, params.razon_social, params.correo, params.telefono, params.usuario_responsable, params.fecha_creacion, params.estado, params.usertype]);
    res.json(rows);
    } catch (error) {
        console.log(error)
        if(error?.code === '23505'){
            return res.status(409).json({ message: error.detail })
        }else{
            return res.status(500).json({ message: "Something goes wrong" })
        }
    }
}

export const updateUser = async (req, res) => {

try {
    const { id } = req.params;
    const { nit, razon_social, correo, telefono, usuario_responsable, fecha_creacion, estado } = req.body;

    const query = `
        UPDATE public."Users"
        SET nit = $1,
            razon_social = $2,
            correo = $3,
            telefono = $4,
            usuario_responsable = $5,
            fecha_creacion = $6,
            estado = $7
        WHERE id = $8
        RETURNING *;
    `;

    const values = [nit, razon_social, correo, telefono, usuario_responsable, fecha_creacion, estado, id];

    const { rows } = await pool.query(query, values);
    return res.json(rows[0]);
} catch (error) {
    console.log(error)
    if(error?.code === '23505'){
        return res.status(409).json({ message: error.detail })
    }else{
        return res.status(500).json({ message: "Something goes wrong" })
    }
}

}

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    const { rows, rowCount } = await pool.query('DELETE FROM public."Users" where id = $1 RETURNING *', [id]);

    if (rowCount === 0) {
        return res.status(404).json({ message: "User not found" });
    } else {
        return res.json(rows);
    }
}
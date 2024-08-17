import { Router } from "express";
import { createUser, deleteUser, getUserById, getUsers, updateUser } from "../controllers/users.controller.js";

const router = Router();

router.get('/clientes/consultar', getUsers)

router.get('/clientes/:id', getUserById)

router.post('/clientes/crear', createUser)

router.patch('/clientes/actualizar/:id', updateUser)

router.delete('/clientes/borrar/:id', deleteUser)
export default router;



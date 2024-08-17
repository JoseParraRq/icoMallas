import axios from './axios.js'


export async function getAllUserClients() {
	const response = await axios.get(`/clientes/consultar`);
	return response.data;
}

export async function createUser(data) {
	try {
		const createUser = await axios.post("/clientes/crear", data);
		return {
			data: createUser.data
		}
	} catch (error) {
			return { error: error }
	}
}

export async function updateUsuario(id, data) {
	try {
		const updateUser = await axios.patch(`/clientes/actualizar/${id}`, data);
		return {
			data: updateUser?.data,
		};
	} catch (error) {
		console.log(error)
	}
}

export async function deleteUserClient(id) {
	try {
		const deleteUsers = await axios.delete(`/clientes/borrar/${id}`);
		return {
			data: deleteUsers?.data,
		};
	} catch (error) {
		console.log(error)
	}
}
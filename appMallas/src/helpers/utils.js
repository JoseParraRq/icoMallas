// Base URL de la API
export const urlAPI = 'http://localhost:3000';

// Configuración de headers para las peticiones de Axios
export const configTokenAXI = () => {
    const token = localStorage.getItem('token');  // Asumiendo que guardas el token en localStorage
    return {
        'Authorization': `Bearer ${token}`
    };
};

// Función para formatear fechas
export const formatDate = (date) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(date).toLocaleDateString(undefined, options);
};

// Función para validar emails
export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

// Función para manejar errores de Axios
export const handleAxiosError = (error) => {
    if (error.response) {
        // El servidor respondió con un código de estado fuera del rango 2xx
        console.error('Error:', error.response.data);
        console.error('Status:', error.response.status);
        console.error('Headers:', error.response.headers);
    } else if (error.request) {
        // La petición fue hecha pero no hubo respuesta
        console.error('Request error:', error.request);
    } else {
        // Algo sucedió al configurar la petición
        console.error('Error:', error.message);
    }
};
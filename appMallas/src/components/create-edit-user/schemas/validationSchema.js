import * as yup from 'yup';

export const schema = yup.object({
    nit: yup.string().required(),
    razon_social: yup.string().required(),
    correo: yup.string().email().required(),
    telefono: yup.string().required()
});


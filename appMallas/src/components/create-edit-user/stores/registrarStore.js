import { defineStore } from "pinia";
import { ref } from "vue";

export const useRegistrarStore = defineStore('registrar', () => {
    const nit = ref('');
    const razon_social = ref('');
    const correo = ref('');
    const telefono = ref('');

    const guardarRegistro = (nitForm, razonSocialForm, correoForm, telefonoForm) => {
             nit.value = nitForm;
    razon_social.value = razonSocialForm;
          correo.value = correoForm;
        telefono.value = telefonoForm;
    
    
}
return {    nit,
    razon_social,
          correo,
        telefono,
    guardarRegistro
}
}
)



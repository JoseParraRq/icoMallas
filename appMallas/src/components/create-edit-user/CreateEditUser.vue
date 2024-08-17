<template>
    <div>
        <Form :validation-schema="schema" @submit="onSubmit">
        <div class="row">
<div class="col-6">
    <!--   nit,
        razon_social,
              correo,
            telefono, -->
    <label for="nit" style="display: block;" >nit: </label>
                <Field v-model="nit" id="nit" type="text" placeholder="ingrese su nit" name="nit"/>
                <ErrorMessage name="nit"</ErrorMessage>
</div>

<div class="col-6">
    <label for="razon_social" style="display: block;">razon_social: </label>
                <Field v-model="razon_social" id="razon_social" type="text" placeholder="ingrese su razon_social" name="razon_social"/>
                <ErrorMessage name="razon_social"</ErrorMessage>
</div>

</div>

    <div class="row">
<div class="col-6">
    <!--   nit,
        razon_social,
              correo,
            telefono, -->
    <label for="correo" style="display: block;" >Correo: </label>
                <Field v-model="correo" id="correo" type="text" placeholder="ingrese su correo" name="correo"/>
                <ErrorMessage name="correo"</ErrorMessage>
</div>

<div class="col-6">
    <label for="telefono"  style="display: block;">Telefono: </label>
                <Field v-model="telefono" id="telefono" type="text" placeholder="ingrese su telefono" name="telefono"/>
                <ErrorMessage name="telefono"</ErrorMessage>
</div>

</div>

<div class="mt-3">
<Button icon="pi pi-send" class="p-button-rounded my-custom-button  mr-2" type="submit" label="Enviar" />
</div>
</Form>
    </div>

</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
import {schema} from './schemas/validationSchema.js'
import {useRegistrarStore} from './stores/registrarStore.js'
import { ref, watch } from "vue";
import { createUser, updateUsuario } from '@/helpers/user.helper.js';
import VueSweetalert2 from 'vue-sweetalert2';
import Swal from 'sweetalert2';

const props = defineProps([
  'user'
]);

const userRecibido =ref(props.user);

const emit = defineEmits(['actionComplete']);



const registrarStore = useRegistrarStore();

   const nit =           ref('')
   const razon_social =  ref('')
   const correo =        ref('')
   const telefono =      ref('')

   watch(() => userRecibido, (newUser) => {
  if (newUser) {
    nit.value = newUser?.value?.nit || '';
    razon_social.value = newUser?.value?.razon_social || '';
    correo.value = newUser?.value?.correo || '';
    telefono.value = newUser?.value?.telefono || '';
  }
}, { immediate: true });

const onSubmit=async ()=>{
   registrarStore.guardarRegistro(nit.value, razon_social.value, correo.value, telefono.value)
   let dataObject = {};
   if(userRecibido.value !== null){
    dataObject = {
    	nit:nit.value,
    razon_social:razon_social.value,
    correo:correo.value,
    telefono:telefono.value,
    usuario_responsable:1,
    fecha_creacion:new Date(),
    estado: true,
    usertype: 2
}

const responseUpdate = await updateUsuario(userRecibido.value?.id,dataObject)
      if(responseUpdate.data !== null){
        emit('actionComplete');
        showAlert()
      }else{
        showAlertError();
      }

   }else{
    dataObject = {
	nit:nit.value,
    razon_social:razon_social.value,
    correo:correo.value,
    telefono:telefono.value,
    usuario_responsable:1,
    fecha_creacion:new Date(),
    estado: true,
    usertype: 2
}

const responseCreate = await createUser(dataObject)
      if(responseCreate.data.length > 0){
        emit('actionComplete');
        showAlert()
      }else{
        showAlertError();
      }
   }

}

const showAlert = async ( type) => {
  if(type!== 'crear'){
    const { value: result } = await Swal.fire({
    title: 'Exito!',
    text: 'Actualizaste a un Cliente',
    icon: 'success',
    confirmButtonText: 'OK'
  });

  if (result) {
  }
  }else{
    const { value: result } = await Swal.fire({
    title: 'Exito!',
    text: 'Agregaste un nuevo cliente',
    icon: 'success',
    confirmButtonText: 'OK'
  });

  if (result) {
  }
  }

};

const showAlertError = async () => {
  const { value: result } = await Swal.fire({
    title: 'Error!',
    text: 'Ocurrio un error',
    icon: 'error',
    confirmButtonText: 'OK'
  });

  if (result) {
  }
};
</script>

<style scoped>

.my-custom-button {
  background-color: #1e90ff; /* Cambia el color de fondo a azul cielo */
  border-color: #1e90ff; /* Cambia el color del borde a azul cielo */
  color: white; /* Cambia el color del texto a blanco */
}

.my-custom-button:hover {
  background-color: #1c86ee; /* Color de fondo al pasar el ratón */
  border-color: #1c86ee; /* Color del borde al pasar el ratón */
}
</style>
<script setup>
import { ref } from "vue";
import '../assets/main.css';


const visible = ref(true);
</script>


<template>
    <div class="flex justify-center p-3">
        <Drawer v-model:visible="visible" header="Mi Menu">
            <ul>
                <li>
                    <RouterLink to="/">Administrar Clientes</RouterLink>
                </li>
            </ul>
            <!-- <Button label="Check" icon="pi pi-check"  /> -->
        </Drawer>
        <Button icon="pi pi-arrow-right" @click="visible = true" class="my-custom-button" />
    </div>
</template>





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
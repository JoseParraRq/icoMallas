    
      <template>
        <div class="row d-flex justify-content-center align-items-center text-center">
            <div class="col-12">
                <h1>Clientes</h1>
                
            </div>

        </div>

        <div class="d-flex justify-content-end mb-2">
            <Button icon="pi pi-plus" @click="createUser" class="my-custom-button" label="Crear"/>
        </div>
    
        <div class="row">
            <div class="col-12">
    <div class="card">
        <div class="p-3">
            <DataTable :value="userStore.usersArray" tableStyle="min-width: 50rem">
                <Column field="id" header="#"></Column>
                <Column field="nit" header="Nit"></Column>
                <Column field="razon_social" header="Razon Social"></Column>
                <Column field="telefono" header="Telefono"></Column>
                <Column field="fecha_creacion" header="Fecha Creacion"></Column>
                <Column header="Acciones">
      <template #body="slotProps">
        <Button icon="pi pi-pencil" class="p-button-rounded my-custom-button  mr-2" @click="editUser(slotProps.data)" />
        <Button icon="pi pi-trash" class="p-button-rounded p-button-danger" @click="deleteUser(slotProps.data)" />
      </template>
    </Column>
            </DataTable>
        </div>
    
    </div>
    </div>
    </div>
    
    <div class="row">
        <Dialog v-model:visible="modalCreate" modal header="Formulario de Registro" :style="{ width: '30vw' }">
            <CreateEditUser :user="selectedUser"  @actionComplete="handleActionComplete"></CreateEditUser>
        </Dialog>
    </div>

        </template>
    
    <script setup>
import { useUsers } from '../composables/useUsers.js';
import { onMounted, ref } from "vue";
import { useUserStore } from '../stores/userStore.js';
import CreateEditUser from '../components/create-edit-user/CreateEditUser.vue';
import Swal from 'sweetalert2';
import { deleteUserClient } from '@/helpers/user.helper.js';
const modalCreate = ref(false)
const selectedUser = ref(null);

const userStore = useUserStore();
onMounted(()=>{useUsers()});

const createUser = ()=>{
    modalCreate.value = true;
}

const editUser = (user) => {
  selectedUser.value = user;
  modalCreate.value = true;
};

const deleteUser = async (user) => {
  const result = await Swal.fire({
    title: 'Esta Segur@?',
    text: 'Esta Accion no tiene respaldo.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Si, Eliminalo!',
    cancelButtonText: 'Cancel'
  });

  if (result.isConfirmed) {
    Swal.fire('Eliminado!', 'la informacion de Su Cliente ha sido Eliminada.', 'success');
   await deleteUserClient(user?.id)
   useUsers();
  } else {
        Swal.fire('Cancelado', 'la informacion sigue', 'error');
  }
  
};

const handleActionComplete = () => {
  modalCreate.value = false;
  useUsers();
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
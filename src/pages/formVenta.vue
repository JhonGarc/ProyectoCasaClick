<script setup lang="ts">
import { ref } from 'vue'
import FirebaseHelper from '@/plugins/firebase'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '@/services/firebase'

const formData = ref<{
  nombre: string
  precio: string
  ubicacion: string
  habitaciones: string
  dimension: string
  baños: string
  images: File[]
}>({
  nombre: '',
  precio: '',
  ubicacion: '',
  habitaciones: '',
  dimension: '',
  baños: '',
  images: [],
})
const isLoading = ref(false)

function onImageUpload(event: any) {
  try {
    //event.files == files to upload
    formData.value.images = event.files
    console.log(event.files)
  } catch (e) {
    alert('Error uploading files')
  }
}

const uploadFiles = async (files: File[]) => {
  try {
    const _files = []
    for (let index = 0; index < files.length; index++) {
      const file_name = [formData.value.nombre.toLowerCase(), index].join('__')
      const __FILE = files[index]
      const progress = await FirebaseHelper.onFileSelect(__FILE, 'casas', file_name)
      if (progress?.status === 'success') {
        _files.push(progress?.data)
      }
    }
    if (_files.length > 0) {
      return {
        success: true,
        files: _files,
      }
    } else {
      return {
        success: false,
      }
    }
  } catch (error) {
    return {
      success: false,
    }
  }
}

async function uploadHouse() {
  try {
    isLoading.value = true
    console.log('Uploading')
    if (formData.value.images.length > 0) {
      const uploadedImages = await uploadFiles(formData.value.images)
      if (uploadedImages.success) {
        const docRef = await addDoc(collection(db, 'casas'), {
          ...formData.value,
          images: uploadedImages.files,
        })
        alert('Anuncio creado: ' + docRef.id)
      } else {
        alert('Error creating document')
      }
    } else {
      alert('Debe añadir una imagen')
    }
  } catch (e) {
    alert('Ha ocurrido un error')
  } finally {
    isLoading.value = false
  }
}
</script>
<template>
  <p>Publica tu propiedad</p>
  <p>Recuerda que despues de publicado no se podran hacer modificaciones</p>
  <div class="bg-[#d9d9d9]">
    <div class="">
      <div class="flex">
        <div class="">
          <div class="flex min-h-full flex-col lg:px-8">
            <div class="mt-8 w-150">
              <form class="space-y-6" @submit.prevent>
                <div>
                  <label for="nombre" class="block text-sm font-medium leading-6 text-gray-900 text-[#a8a8b1]"
                    >Nombre</label
                  >
                  <div class="mt-2">
                    <input
                      id="nombre"
                      v-model="formData.nombre"
                      name="nombre"
                      type="text"
                      required
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label for="precio" class="block text-sm font-medium leading-6 text-gray-900 text-[#a8a8b1]"
                    >Precio</label
                  >
                  <div class="mt-2">
                    <input
                      id="precio"
                      v-model="formData.precio"
                      name="precio"
                      type="text"
                      required
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label for="ubicacion" class="block text-sm font-medium leading-6 text-gray-900 text-[#a8a8b1]"
                    >Ubicación</label
                  >
                  <div class="mt-2">
                    <input
                      id="ubicacion"
                      v-model="formData.ubicacion"
                      name="ubicacion"
                      type="text"
                      required
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label for="habitaciones" class="block text-sm font-medium leading-6 text-gray-900 text-[#a8a8b1]"
                    >Habitaciones</label
                  >
                  <div class="mt-2">
                    <input
                      id="habitaciones"
                      v-model="formData.habitaciones"
                      name="habitaciones"
                      type="text"
                      required
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label for="dimension" class="block text-sm font-medium leading-6 text-gray-900 text-[#a8a8b1]"
                    >Dimesion</label
                  >
                  <div class="mt-2">
                    <input
                      id="dimension"
                      v-model="formData.dimension"
                      name="dimension"
                      type="text"
                      required
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label for="baños" class="block text-sm font-medium leading-6 text-gray-900 text-[#a8a8b1]"
                    >Baños</label
                  >
                  <div class="mt-2">
                    <input
                      id="baños"
                      v-model="formData.baños"
                      name="baños"
                      type="string"
                      required
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div class="card flex justify-content-center">
                  <FileUpload
                    mode="basic"
                    name="demo[]"
                    @select="onImageUpload"
                    accept="image/*"
                    multiple
                    :maxFileSize="2000000"
                    :showUploadButton="false"
                    :showCancelButton="false"
                    :chooseLabel="'Selecciona el archivo jpg/png'"
                  />
                </div>
                <div class="ml-50">
                  <button
                    :disabled="isLoading"
                    type="button"
                    @click="uploadHouse"
                    class="flex w-110 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    {{ isLoading ? 'Cargando...' : 'Registrar' }}
                  </button>
                </div>
              </form>
              <!-- <form class="space-y-6" action="#" method="POST">
                <div>
                  <label for="Nombres" class="block text-sm font-medium leading-6 text-gray-900 text-[#a8a8b1]"
                    >Nombres</label
                  >
                  <div class="mt-2">
                    <input
                      id="Nombres"
                      name="Nombres"
                      type="text"
                      autocomplete="Nombres"
                      required
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label for="Apellidos" class="block text-sm font-medium leading-6 text-gray-900 text-[#a8a8b1]"
                    >Apellidos</label
                  >
                  <div class="mt-2">
                    <input
                      id="Apellidos"
                      name="Apellidos"
                      type="text"
                      autocomplete="Apellidos"
                      required
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label for="Telefono" class="block text-sm font-medium leading-6 text-gray-900 text-[#a8a8b1]"
                    >Telefono</label
                  >
                  <div class="mt-2">
                    <input
                      id="Telefono"
                      name="Telefono"
                      type="tel"
                      autocomplete="Telefono"
                      required
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium leading-6 text-gray-900 text-[#a8a8b1]"
                    >Email address</label
                  >
                  <div class="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autocomplete="email"
                      required
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <div class="flex items-center justify-between">
                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900 text-[#a8a8b1]"
                      >Fecha Nacimiento</label
                    >
                  </div>
                  <div class="card flex justify-content-center">
                    <div class="card flex justify-content-center">
                      <Calendar v-model="date" />
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex items-center justify-between">
                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900 text-[#a8a8b1]"
                      >Password</label
                    >
                  </div>
                  <div class="card flex justify-content-center">
                    <div class="card flex justify-content-center">
                      <Password v-model="value" toggleMask />
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex items-center justify-between">
                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900 text-[#a8a8b1]"
                      >Confirmar Password</label
                    >
                  </div>
                  <div class="card flex justify-content-center">
                    <Password v-model="value2" toggleMask :feedback="false" />
                  </div>
                </div>
                <div class="card flex flex-wrap justify-content-center gap-3">
                  <div class="flex align-items-center">
                    <Checkbox v-model="pizza" inputId="ingredient1" name="pizza" value="Cheese" />
                    <label for="ingredient1" class="ml-2"> Cheese </label>
                  </div>
                  <div class="flex align-items-center">
                    <Checkbox v-model="pizza" inputId="ingredient2" name="pizza" value="Mushroom" />
                    <label for="ingredient2" class="ml-2"> Mushroom </label>
                  </div>
                  <div class="flex align-items-center">
                    <Checkbox v-model="pizza" inputId="ingredient3" name="pizza" value="Pepper" />
                    <label for="ingredient3" class="ml-2"> Pepper </label>
                  </div>
                  <div class="flex align-items-center">
                    <Checkbox v-model="pizza" inputId="ingredient4" name="pizza" value="Onion" />
                    <label for="ingredient4" class="ml-2"> Onion </label>
                  </div>
                </div>
                <div>
                  <label for="Nombres" class="block text-sm font-medium leading-6 text-gray-900 text-[#a8a8b1]"
                    >Nombres</label
                  >
                  <div class="mt-2">
                    <input
                      id="Nombres"
                      name="Nombres"
                      type="text"
                      autocomplete="Nombres"
                      required
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label for="Nombres" class="block text-sm font-medium leading-6 text-gray-900 text-[#a8a8b1]"
                    >Nombres</label
                  >
                  <div class="mt-2">
                    <input
                      id="Nombres"
                      name="Nombres"
                      type="text"
                      autocomplete="Nombres"
                      required
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label for="Nombres" class="block text-sm font-medium leading-6 text-gray-900 text-[#a8a8b1]"
                    >Nombres</label
                  >
                  <div class="mt-2">
                    <input
                      id="Nombres"
                      name="Nombres"
                      type="text"
                      autocomplete="Nombres"
                      required
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div class="ml-50">
                  <button
                    type="submit"
                    class="flex w-110 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Registrar
                  </button>
                </div>
                <div class="card flex justify-content-center">
                  <Toast />
                  <FileUpload
                    mode="basic"
                    name="demo[]"
                    url="./upload.php"
                    accept="image/*"
                    :maxFileSize="1000000"
                    multiple
                    @upload="onUpload"
                  />
                </div>
              </form> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

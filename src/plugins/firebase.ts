/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { storage } from '@/services/firebase'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'

const setupFileName = (fileName: string, customFolder?: string, customName?: string) => {
  const name = customFolder ? `${customFolder}/` : ''
  return `${name}${customName ? customName : fileName}`
}

const FirebaseHelper = {
  /**
   * Upload a file
   */
  onFileSelect: async (file: File, customFolder?: string, customName?: string) => {
    try {
      const storageRef = ref(storage, `${setupFileName(file.name, customFolder, customName)}`)
      const uploadTask = await uploadBytesResumable(storageRef, file)
      // Listen for state changes, errors, and completion of the upload.
      if (uploadTask.state == 'error') {
        return {
          status: 'error',
          data: 'Something happened',
        }
      } else if (uploadTask.state == 'success') return { status: 'success', data: await getDownloadURL(uploadTask.ref) }
      // const status = await uploadTask.on(
      //   'state_changed',
      //   (snapshot) => {
      //     // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      //     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      //     console.log('Upload is ' + progress + '% done')
      //     switch (snapshot.state) {
      //       case 'paused':
      //         console.log('Upload is paused')
      //         break
      //       case 'running':
      //         console.log('Upload is running')
      //         break
      //     }
      //   },
      //   (error) => {
      //     return error.code
      //     // A full list of error codes is available at
      //     // https://firebase.google.com/docs/storage/web/handle-errors
      //     // switch (error.code) {
      //     //   case 'storage/unauthorized':
      //     //     // User doesn't have permission to access the object
      //     //     break
      //     //   case 'storage/canceled':
      //     //     // User canceled the upload
      //     //     break

      //     //   // ...

      //     //   case 'storage/unknown':
      //     //     // Unknown error occurred, inspect error.serverResponse
      //     //     break
      //     // }
      //   },
      //   () => {
      //     // Upload completed successfully, now we can get the download URL
      //     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      //       console.log('File available at', downloadURL)
      //       return downloadURL
      //     })
      //   }
      // )
    } catch (error) {
      return {
        status: 'error',
        data: error,
      }
    }
  },
}

export default FirebaseHelper

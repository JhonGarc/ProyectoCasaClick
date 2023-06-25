// import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'

import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Card from 'primevue/card'
import ContextMenu from 'primevue/contextmenu'
import Dialog from 'primevue/dialog'
import Dropdown from 'primevue/dropdown'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import RadioButton from 'primevue/radiobutton'
import Textarea from 'primevue/textarea'
import MegaMenu from 'primevue/megamenu'
import InputMask from 'primevue/inputmask'
import Carousel from 'primevue/carousel'
import Calendar from 'primevue/calendar'
import TabMenu from 'primevue/tabmenu'
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import Checkbox from 'primevue/checkbox'
import FileUpload from 'primevue/fileupload'
import Toast from 'primevue/toastservice'
import Galleria from 'primevue/galleria'

// import { locale } from './locale'

const options = {
  // locale,
  ripple: true,
  inputStyle: 'filled',
}

const components = [
  Avatar,
  Button,
  Card,
  ContextMenu,
  Dialog,
  Dropdown,
  InputNumber,
  InputText,
  Password,
  RadioButton,
  Textarea,
  MegaMenu,
  InputMask,
  Carousel,
  Calendar,
  TabMenu,
  TabView,
  TabPanel,
  Checkbox,
  FileUpload,
  Dialog,
  Galleria,
  Toast,
]

export default function (app: any) {
  app.use(PrimeVue, options)
  app.use(ToastService)

  components.forEach((component) => {
    app.component(component.name, component)
  })
}

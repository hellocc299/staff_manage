import { App } from 'vue'

import { utcDateFormat } from '@/utils/date-format'

export default function registerProperties(app: App) {
   app.config.globalProperties.$filter = {
     formatTime(value: string) {
       return utcDateFormat(value)
     }
   }
}

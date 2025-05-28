import 'i18next'

import kr from './kr.json'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'ns1'
    resources: {
      ns1: typeof kr
    }
  }
}

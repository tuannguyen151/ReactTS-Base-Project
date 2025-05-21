import 'i18next'

import en from './en.json'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'ns1'
    resources: {
      ns1: typeof en
    }
  }
}

import 'i18next'

import vi from './vi.json'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'ns1'
    resources: {
      ns1: typeof vi
    }
  }
}

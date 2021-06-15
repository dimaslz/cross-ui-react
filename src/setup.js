import { applyPolyfills, defineCustomElements } from '@cross-ui/core/loader'

export const setup = () => {
  applyPolyfills().then(() => {
    defineCustomElements()
  })
}

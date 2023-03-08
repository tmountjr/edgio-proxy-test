import { Router } from '@edgio/core/router'

export default new Router()
  .fallback(({ proxy }) => proxy('proxied'))

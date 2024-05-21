import { defineAbilitiesFor } from '@saas/auth'

const userCanInviteSomeone = defineAbilitiesFor({ role: 'ADMIN' })

console.log(userCanInviteSomeone)

import { defineAbilitiesFor, Role, userSchema } from '@saas/auth'

export function getUserPermissions(userId: string, role: Role) {
  const autUser = userSchema.parse({
    id: userId,
    role,
  })

  const ability = defineAbilitiesFor(autUser)

  return ability
}

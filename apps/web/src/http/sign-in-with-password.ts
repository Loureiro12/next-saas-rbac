import { api } from './api.client'

interface SignIWithPasswordRequest {
  email: string
  password: string
}

interface SignInWithPasswordResponse {
  token: string
}

export async function signInWithPassword({
  email,
  password,
}: SignIWithPasswordRequest) {
  const result = await api
    .post('sessions/password', {
      json: { email, password },
    })
    .json<SignInWithPasswordResponse>()

  return result
}

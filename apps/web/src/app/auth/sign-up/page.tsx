import Image from 'next/image'
import Link from 'next/link'

import githubIcon from '@/assets/github-icon.svg.svg'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

export default function SignUpPage() {
  return (
    <form action="" className="space-y-4">
      <div className="space-y-1">
        <Label htmlFor="name">Email</Label>
        <Input type="text" id="name" name="name" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="password_confirmation">Password</Label>
        <Input
          type="password"
          id="password_confirmation"
          name="password_confirmation"
        />
      </div>

      <div className="space-y-1">
        <Label htmlFor="password">Confirm your password</Label>
        <Input type="password" id="password" name="password" />
      </div>

      <Button variant="link" className="w-full" asChild size="sm">
        <Link href="/auth/sign-in">Already registered? Sign in</Link>
      </Button>

      <Button type="submit" className="w-full">
        Create account
      </Button>

      <Separator />

      <Button type="submit" variant="outline" className="w-full">
        <Image
          src={githubIcon}
          alt="GitHub icon"
          className="mr-2 size-4 dark:invert"
        />
        Sign up with GitHub
      </Button>
    </form>
  )
}

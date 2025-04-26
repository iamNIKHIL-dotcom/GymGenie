"use-client"
import { SignedIn, SignedOut, SignIn, SignInButton, SignOutButton } from "@clerk/nextjs"


const page = () => {
  return (
    <div>Home-page

      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
    </div>
  )
}

export default page
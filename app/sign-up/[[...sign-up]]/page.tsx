import { SignUp } from "@clerk/nextjs"
const page = () => {
  return (
    <div className="flex w-screen h-screen items-center justify-center">
        <SignUp/>
    </div>
  )
}

export default page
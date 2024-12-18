import { SignIn } from "@clerk/nextjs"

const page = () => {
  return (
    <div className="w-screen h-screen items-center justify-center flex">
        <SignIn/>
    </div>
  )
}

export default page
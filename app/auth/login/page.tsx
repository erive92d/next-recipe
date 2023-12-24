import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import LoginForm from '@/components/Account/LoginForm'
import testApi from '@/controllers/test'
import { redirect } from '@/node_modules/next/navigation'
import { getServerSession } from "next-auth"

export default async function page() {
    const session = await getServerSession(authOptions)
    if (session?.user) {
        redirect("/")
    }
    return <LoginForm />
}

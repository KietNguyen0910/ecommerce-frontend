import { RegisterForm } from "@/components/pages/login/register-form"

export const dynamic = 'force-dynamic'
interface RegisterProps {
  params: Promise<{ locale: string }>
}

const Register = async ({ params }: RegisterProps) => {
  const resolvedParams = await params

  return <RegisterForm />
}

export default Register

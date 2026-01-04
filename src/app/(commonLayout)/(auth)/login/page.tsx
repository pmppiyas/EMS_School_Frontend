import LoginForm from '@/app/components/module/auth/LoginForm';

export const dynamic = 'force-dynamic';

const LoginPage = async ({
  searchParams,
}: {
  searchParams?: Promise<{ redirectTo?: string }>;
}) => {
  const redirect = (await searchParams)?.redirectTo || '/';

  return (
    <div className="min-h-screen w-full flex  items-center justify-center">
      <LoginForm redirect={redirect} />
    </div>
  );
};

export default LoginPage;

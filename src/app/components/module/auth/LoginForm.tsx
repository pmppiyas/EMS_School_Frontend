'use client';

import { loginSchema } from '@/app/components/module/auth/schema';
import { loginUser } from '@/app/services/auth/login';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

type LoginFormData = z.infer<typeof loginSchema>;

const LoginForm = ({ redirect }: { redirect?: string }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      setLoading(true);
      const login = await loginUser(data);

      if (login.success) {
        toast.success(login.message);
        const destination = redirect ? decodeURIComponent(redirect) : '/';
        router.push(destination);
      } else {
        toast.error(login.message);
        setLoading(false);
      }
    } catch (err) {
      toast.error('Login failed');
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-sm shadow-md mt-16 mx-auto">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              {...register('email')}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link
                href="/forgot-password"
                className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
              >
                Forgot your password?
              </Link>
            </div>
            <Input id="password" type="password" {...register('password')} />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <div className="flex justify-center">
            <Button
              type="submit"
              className="w-full min-w-40 flex items-center justify-center gap-2"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  {redirect ? 'Redirecting...' : 'Logging in...'}
                </>
              ) : (
                'Login'
              )}
            </Button>
          </div>
        </form>
      </CardContent>

      <CardFooter className="flex flex-col gap-2">
        <Button variant="outline" className="w-full" disabled={loading}>
          Login with Google
        </Button>

        <div className="mt-4 text-center text-sm">
          Have no account?{' '}
          <Link
            href="/signup"
            className="text-primary font-medium hover:underline"
          >
            Sign Up
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;

/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
  Eye,
  EyeOff,
  ShieldCheck,
  KeyRound,
  AlertTriangle,
  Loader2,
} from 'lucide-react';
import { toast } from 'sonner';
import { IUserProfile } from '@/types/user.inteface';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { changeMyPassword } from '@/app/services/auth/changePassword';
import { Badge } from '@/components/ui/badge';
import { PasswordFormValues, passwordSchema } from '@/zod/user.validation';

const SecuritySection = ({ user }: { user: IUserProfile }) => {
  const isPasswordChangeRequired = user?.needPasswordChange;

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordSchema),
  });

  const onSubmit = async (data: PasswordFormValues) => {
    setLoading(true);
    try {
      const res = await changeMyPassword({
        oldPassword: data.oldPassword,
        newPassword: data.newPassword,
      });

      if (res?.success) {
        toast.success(res.message);
        reset();
        if (isPasswordChangeRequired) {
          window.location.reload();
        }
      } else {
        toast.error(res?.message || 'Failed to update password');
      }
    } catch (error: any) {
      toast.error(error?.message || 'Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card
      className={`shadow-sm ${isPasswordChangeRequired ? 'border-warning/50' : 'border-border'}`}
    >
      <CardHeader
        className={`border-b ${isPasswordChangeRequired ? 'bg-warning/10' : 'bg-muted/30'}`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-primary w-5 h-5" />
            <CardTitle className="text-xl font-bold">
              Security Settings
            </CardTitle>
          </div>
          {isPasswordChangeRequired ? (
            <span className="text-[10px] bg-warning text-warning-foreground px-2 py-1 rounded-full font-bold animate-pulse">
              ACTION REQUIRED
            </span>
          ) : (
            <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 hover:bg-emerald-500/10 shadow-none uppercase text-[10px] font-bold">
              SECURE
            </Badge>
          )}
        </div>
        <CardDescription>
          Ensure your account is using a long, random password to stay secure.
        </CardDescription>
      </CardHeader>

      <CardContent>
        {isPasswordChangeRequired && (
          <Alert
            variant="destructive"
            className="mb-6 bg-destructive/5 border-destructive/20 text-destructive"
          >
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle className="font-bold uppercase tracking-tight">
              Security Alert
            </AlertTitle>
            <AlertDescription className="text-sm opacity-90">
              Your account is currently flagged. You must change your temporary
              password to proceed.
            </AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 max-w-md">
          {/* Current Password */}
          <div className="space-y-2">
            <Label htmlFor="oldPassword">Current Password</Label>
            <div className="relative">
              <Input
                {...register('oldPassword')}
                id="oldPassword"
                type={showCurrent ? 'text' : 'password'}
                placeholder="••••••••"
                className={
                  errors.oldPassword
                    ? 'border-destructive focus-visible:ring-destructive'
                    : ''
                }
              />
              <button
                type="button"
                onClick={() => setShowCurrent(!showCurrent)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              >
                {showCurrent ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {errors.oldPassword && (
              <p className="text-xs text-destructive">
                {errors.oldPassword.message}
              </p>
            )}
          </div>

          {/* New Password */}
          <div className="space-y-2">
            <Label htmlFor="newPassword">New Password</Label>
            <div className="relative">
              <Input
                {...register('newPassword')}
                id="newPassword"
                type={showNew ? 'text' : 'password'}
                placeholder="••••••••"
                className={
                  errors.newPassword
                    ? 'border-destructive focus-visible:ring-destructive'
                    : ''
                }
              />
              <button
                type="button"
                onClick={() => setShowNew(!showNew)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              >
                {showNew ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {errors.newPassword && (
              <p className="text-xs text-destructive">
                {errors.newPassword.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm New Password</Label>
            <Input
              {...register('confirmPassword')}
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              className={
                errors.confirmPassword
                  ? 'border-destructive focus-visible:ring-destructive'
                  : ''
              }
            />
            {errors.confirmPassword && (
              <p className="text-xs text-destructive">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <div className="pt-2 flex items-center gap-4">
            <Button
              type="submit"
              disabled={loading}
              className={`gap-2 min-w-[140px] ${
                isPasswordChangeRequired
                  ? 'mb-1 h-9 px-4 border-input hover:bg-accent hover:text-accent-foreground'
                  : 'bg-primary'
              }`}
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <KeyRound size={16} />
              )}
              {loading ? 'Processing...' : 'Change Password'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default SecuritySection;

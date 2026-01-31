'use client';

import React, { useState } from 'react';
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
import { Eye, EyeOff, ShieldCheck, KeyRound } from 'lucide-react';
import { toast } from 'sonner';

const SecuritySection = () => {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.success('Password updated successfully!');
    }, 1500);
  };

  return (
    <Card className="border-red-100 shadow-sm">
      <CardHeader className="border-b bg-gray-50/50">
        <div className="flex items-center gap-2">
          <ShieldCheck className="text-primary w-5 h-5" />
          <CardTitle className="text-xl">Security Settings</CardTitle>
        </div>
        <CardDescription>
          Update your password to keep your account secure.
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-6">
        <form onSubmit={handlePasswordChange} className="space-y-5 max-w-md">
          {/* Current Password */}
          <div className="space-y-2">
            <Label htmlFor="current-password">Current Password</Label>
            <div className="relative">
              <Input
                id="current-password"
                type={showCurrent ? 'text' : 'password'}
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowCurrent(!showCurrent)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showCurrent ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* New Password */}
          <div className="space-y-2">
            <Label htmlFor="new-password">New Password</Label>
            <div className="relative">
              <Input
                id="new-password"
                type={showNew ? 'text' : 'password'}
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowNew(!showNew)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm New Password</Label>
            <Input
              id="confirm-password"
              type="password"
              placeholder="••••••••"
              required
            />
          </div>

          <div className="pt-2 flex items-center gap-4">
            <Button type="submit" disabled={loading} className="gap-2">
              <KeyRound size={16} />
              {loading ? 'Updating...' : 'Update Password'}
            </Button>
            <Button
              type="button"
              variant="ghost"
              className="text-red-500 hover:text-red-600 hover:bg-red-50"
            >
              Forgot Password?
            </Button>
          </div>
        </form>

        {/* Account Deletion - Optional but good for UX */}
        <div className="mt-10 pt-6 border-t border-gray-100">
          <h4 className="text-sm font-semibold text-red-600 mb-2">
            Danger Zone
          </h4>
          <p className="text-xs text-gray-500 mb-4">
            Once you delete your account, there is no going back. Please be
            certain.
          </p>
          <Button
            variant="outline"
            className="border-red-200 text-red-600 hover:bg-red-50"
          >
            Deactivate Account
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SecuritySection;

/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import  { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { IUserProfile } from '@/types/user.inteface';
import {
  MapPin,
  Phone,
  Mail,
  Briefcase,
  Calendar,
  User,
  Pencil,
  Check,
  X,
  Loader2,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import ProfileFormDialog from '@/app/components/shared/setting/ProfileFormDialog';
import { changeEmail } from '@/app/services/auth/changeEmail';
import { IAdmin } from '@/types/admin.interface';
import { ITeacher } from '@/types/teacher.interface';

const ProfileSection = ({ user }: { user: IUserProfile }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [newEmail, setNewEmail] = useState(user?.email || '');
  const [loading, setLoading] = useState(false);

  const handleEmailUpdate = async () => {
    if (newEmail === user?.email) {
      setIsEditingEmail(false);
      return;
    }
    setLoading(true);
    try {
      const res = await changeEmail(newEmail);
      if (res.success) {
        toast.success(res.message);
        setIsEditingEmail(false);
      }
    } catch (error: any) {
      toast.error(error.message || 'Failed to update email');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Card className="overflow-hidden border border-border bg-card shadow-sm">
        <div className="h-28 bg-primary/10 border-b border-border relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))]from-primary via-transparent to-transparent" />
        </div>

        <CardContent className="relative pt-0">
          <div className="flex flex-col sm:flex-row items-end gap-4 -mt-12 mb-6 px-4">
            <Avatar className="h-24 w-24 ring-4 ring-background shadow-md">
              <AvatarImage
                src={user?.photo || undefined}
                className="object-cover"
              />
              <AvatarFallback className="text-2xl bg-muted text-muted-foreground">
                {user?.firstName?.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 pb-1">
              <h2 className="text-2xl font-bold text-foreground tracking-tight">
                {user?.firstName} {user?.lastName}
              </h2>
              <div className="flex items-center gap-2 mt-1.5">
                <Badge
                  variant="outline"
                  className="capitalize font-medium bg-secondary/50 text-secondary-foreground"
                >
                  {user?.role?.toLowerCase()}
                </Badge>
                {user?.status === 'ACTIVE' && (
                  <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 hover:bg-emerald-500/10 shadow-none">
                    Active
                  </Badge>
                )}
              </div>
            </div>
            <Button
              onClick={() => setIsDialogOpen(true)}
              variant="outline"
              size="sm"
              className="mb-1 h-9 px-4"
            >
              Edit Profile
            </Button>
          </div>

          <div className="h-px w-full bg-border my-6" />

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 px-2 pb-6">
            <div className="space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground/70">
                Contact Information
              </h3>

              <div className="space-y-4">
                {/* Email Field with Inline Edit */}
                <div className="flex items-center gap-4 group">
                  <div className="p-2.5 bg-secondary/80 rounded-lg text-secondary-foreground">
                    <Mail size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-[11px] text-muted-foreground font-semibold uppercase tracking-tight">
                      Email
                    </p>

                    {isEditingEmail ? (
                      <div className="flex items-center gap-2 mt-1">
                        <Input
                          value={newEmail}
                          onChange={(e) => setNewEmail(e.target.value)}
                          className="h-8 text-sm focus-visible:ring-primary w-full max-w-[250px]"
                          disabled={loading}
                          autoFocus
                        />
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-8 w-8 text-emerald-600 hover:bg-emerald-50"
                          onClick={handleEmailUpdate}
                          disabled={loading}
                        >
                          {loading ? (
                            <Loader2 size={14} className="animate-spin" />
                          ) : (
                            <Check size={14} />
                          )}
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-8 w-8 text-destructive hover:bg-destructive/5"
                          onClick={() => {
                            setIsEditingEmail(false);
                            setNewEmail(user?.email || '');
                          }}
                          disabled={loading}
                        >
                          <X size={14} />
                        </Button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 group/text">
                        <p className="text-sm font-medium text-foreground">
                          {user?.email}
                        </p>
                        <button
                          onClick={() => setIsEditingEmail(true)}
                          className="opacity-0 group-hover:opacity-100 group-hover/text:text-primary transition-all p-1 hover:bg-secondary rounded"
                        >
                          <Pencil size={12} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Phone & Address (Keep as they were) */}
                <div className="flex items-center gap-4 group">
                  <div className="p-2.5 bg-secondary/80 rounded-lg text-secondary-foreground">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="text-[11px] text-muted-foreground font-semibold uppercase tracking-tight">
                      Phone
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      {user?.phoneNumber || '—'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-2.5 bg-secondary/80 rounded-lg text-secondary-foreground">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-[11px] text-muted-foreground font-semibold uppercase tracking-tight">
                      Address
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      {user?.address || '—'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Professional Details (Keep same) */}
            <div className="space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground/70">
                Professional Details
              </h3>
              <div className="space-y-4">
                {user.role !== 'STUDENT' && (
                  <div className="flex items-center gap-4 group">
                    <div className="p-2.5 bg-secondary/80 rounded-lg text-secondary-foreground">
                      <Briefcase size={16} />
                    </div>
                    <div>
                      <p className="text-[11px] text-muted-foreground font-semibold uppercase tracking-tight">
                        Designation
                      </p>
                      <p className="text-sm font-medium text-foreground capitalize">
                        {(user as IAdmin | ITeacher).designation ||
                          'Faculty Member'}
                      </p>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-4 group">
                  <div className="p-2.5 bg-secondary/80 rounded-lg text-secondary-foreground">
                    <User size={16} />
                  </div>
                  <div>
                    <p className="text-[11px] text-muted-foreground font-semibold uppercase tracking-tight">
                      Gender
                    </p>
                    <p className="text-sm font-medium text-foreground capitalize">
                      {user?.gender?.toLowerCase() || '—'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="p-2.5 bg-secondary/80 rounded-lg text-secondary-foreground">
                    <Calendar size={16} />
                  </div>
                  <div>
                    <p className="text-[11px] text-muted-foreground font-semibold uppercase tracking-tight">
                      Joined Date
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      {user?.createdAt
                        ? new Date(user.createdAt).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                          })
                        : '—'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <ProfileFormDialog
        open={isDialogOpen}
        onSuccess={() => setIsDialogOpen(false)}
        onClose={() => setIsDialogOpen(false)}
        user={user}
      />
    </>
  );
};

export default ProfileSection;

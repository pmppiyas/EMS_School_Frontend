/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { IUserProfile } from '@/types/user.inteface';
import { useState } from 'react';
import ProfileFormDialog from '@/app/components/shared/setting/ProfileFormDialog';
import { MapPin, Phone, Mail, Briefcase, Calendar, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const ProfileSection = ({ user }: { user: IUserProfile }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <Card className="overflow-hidden border border-border bg-card shadow-sm">
        {/* Profile Banner: Using Shadcn Primary color with subtle pattern */}
        <div className="h-32 bg-primary/10 border-b border-border relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))]from-primary via-transparent to-transparent" />
        </div>

        <CardContent className="relative pt-0">
          {/* Avatar Positioning */}
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
              className="mb-1 h-9 px-4 border-input hover:bg-accent hover:text-accent-foreground"
            >
              Edit Profile
            </Button>
          </div>

          <div className="h-px w-full bg-border my-6" />

          {/* Details Grid - Shadcn Minimalist Style */}
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 px-2 pb-6">
            {/* Left Column: Contact */}
            <div className="space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground/70">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4 group">
                  <div className="p-2.5 bg-secondary/80 rounded-lg text-secondary-foreground">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="text-[11px] text-muted-foreground font-semibold uppercase tracking-tight">
                      Email
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      {user?.email}
                    </p>
                  </div>
                </div>

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

            {/* Right Column: Professional */}
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
                        {(user as any).designation || 'Faculty Member'}
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

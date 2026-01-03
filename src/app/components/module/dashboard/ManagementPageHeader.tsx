import React from 'react';
import HeaderActionButton from '@/app/components/module/dashboard/HeaderActionButton';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import {
  IAction,
  IManagementPageHeaderProps,
} from '@/app/components/module/dashboard/interfaces';

const ManagementPageHeader = ({
  title,
  description,
  breadcrumbs = [],
  actions = [],
  showSearch = false,
  searchField,
  classSelector,
  isLoading = false,
}: IManagementPageHeaderProps & { searchField?: React.ReactNode }) => {
  return (
    <header className="pb-6 border-b flex flex-col gap-4 container max-w-7xl mx-auto">
      {/* Breadcrumbs */}
      {breadcrumbs.length > 0 && (
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          {breadcrumbs.map((item, i) => (
            <React.Fragment key={i}>
              {item.href ? (
                <a href={item.href} className="hover:text-primary">
                  {item.label}
                </a>
              ) : (
                <span>{item.label}</span>
              )}
              {i < breadcrumbs.length - 1 && <span>/</span>}
            </React.Fragment>
          ))}
        </nav>
      )}

      {/* Title + Actions */}
      <div className="flex items-center justify-between gap-4">
        <div>
          {isLoading ? (
            <>
              <div className="h-6 w-40 bg-muted animate-pulse rounded" />
              <div className="h-4 w-60 mt-2 bg-muted animate-pulse rounded" />
            </>
          ) : (
            <>
              <h1 className="text-2xl font-semibold">{title}</h1>
              {description && (
                <p className="text-muted-foreground mt-1">{description}</p>
              )}
            </>
          )}
        </div>

        {/* Right Actions */}
        {actions?.length > 0 && (
          <div className="flex items-center gap-3">
            {actions.map((action, idx) => {
              if (React.isValidElement(action)) {
                return <React.Fragment key={idx}>{action}</React.Fragment>;
              }
              const act = action as IAction;
              return (
                <HeaderActionButton
                  key={idx}
                  Icon={act.icon}
                  label={act.label}
                  onClick={act.onClick}
                  href={act.href}
                />
              );
            })}
          </div>
        )}
      </div>

      <Separator />
      <div className="flex gap-4">
        {/* Select Class */}
        {classSelector && !isLoading && <>{classSelector}</>}

        {classSelector && isLoading && (
          <div className="max-w-sm h-10 bg-muted animate-pulse rounded" />
        )}

        {/* Search Bar */}
        {showSearch && !isLoading && (
          <>
            {searchField || (
              <Input placeholder="Search..." className="max-w-sm" />
            )}
          </>
        )}

        {showSearch && isLoading && (
          <div className="max-w-sm h-10 bg-muted animate-pulse rounded" />
        )}
      </div>
    </header>
  );
};

export default ManagementPageHeader;

import { LucideIcon } from 'lucide-react';
import React from 'react';

export interface IAction {
  icon?: LucideIcon;
  label: string;
  onClick?: () => void;
  href?: string;
}

// Breadcrumb interface
export interface IBreadcrumbItem {
  label: string;
  href?: string;
}

// Management Page Header Props
export interface IManagementPageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs?: IBreadcrumbItem[];

  actions?: (IAction | React.ReactNode)[];

  showSearch?: boolean;
  searchField?: React.ReactNode;
  classSelector?: React.ReactNode;
  isLoading?: boolean;
}

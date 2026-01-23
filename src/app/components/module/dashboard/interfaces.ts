import { LucideIcon } from 'lucide-react';
import React from 'react';

export interface IAction {
  icon?: LucideIcon;
  label: string;
  onClick?: () => void;
  href?: string;
}

export interface IManagementPageHeaderProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  actions?: (IAction | React.ReactNode)[];
  showSearch?: boolean;
  searchField?: React.ReactNode;
  classSelector?: React.ReactNode;
  isLoading?: boolean;
}

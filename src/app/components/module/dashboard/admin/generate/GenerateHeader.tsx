import ManagementPageHeader from '@/app/components/module/dashboard/ManagementPageHeader';

const GenerateHeader = ({
  selectTab,
  classSelector,
  tab,
}: {
  selectTab: React.ReactNode;
  classSelector?: React.ReactNode;
  tab: string;
}) => {
  const getTitle = () => {
    switch (tab) {
      case 'admit':
        return 'Admit Card Generate';
      case 'testimonial':
        return 'Testimonial Generate';
      default:
        return 'Document Generation';
    }
  };

  const getDescription = () => {
    switch (tab) {
      case 'admit':
        return 'Generate and manage student admit cards for upcoming examinations.';
      case 'testimonial':
        return 'Create official testimonials and character certificates for students.';
      default:
        return 'Select a category to generate documents for students.';
    }
  };

  return (
    <div>
      <ManagementPageHeader
        title={getTitle()}
        description={getDescription()}
        actions={[selectTab, classSelector]}
      />
    </div>
  );
};

export default GenerateHeader;

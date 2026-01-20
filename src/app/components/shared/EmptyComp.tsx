const EmptyComp = ({
  subject,
  refreshButton,
}: {
  subject?: string;
  refreshButton?: React.ReactNode;
}) => {
  return (
    <div className="h-[300px] flex flex-col items-center justify-center space-y-3">
      <p className="text-lg">No {subject ?? 'records'} found!</p>
      {refreshButton}
    </div>
  );
};

export default EmptyComp;

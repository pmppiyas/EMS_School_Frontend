import EmptyComp from '@/app/components/shared/EmptyComp';
import { FileText } from 'lucide-react';
import ResultView from '@/app/components/module/dashboard/student/result/ResultView';
import { getStudentResults } from '@/app/services/result/getStudentResults';

const ResultDataWrapper = async ({
  term,
  year,
}: {
  term: string;
  year: string;
}) => {
  const data = await getStudentResults(year, term);

  if (!data || data.length === 0) {
    return (
      <EmptyComp
        subject={`${term} Examination ${year}`}
        icon={FileText}
        description="No result data found for the selected year and term."
      />
    );
  }

  return <ResultView results={data} year={year.toString()} term={term} />;
};

export default ResultDataWrapper;

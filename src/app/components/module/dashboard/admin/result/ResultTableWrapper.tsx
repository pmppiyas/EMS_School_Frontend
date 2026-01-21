import { getResults } from '@/app/services/result/getAllResults';
import ViewResult from './ViewResult';
import EmptyComp from '@/app/components/shared/EmptyComp';

export default async function ResultTableWrapper({
  classId,
  term,
  year,
}: {
  classId: string;
  term: string;
  year: string;
}) {

  const results = await getResults(classId, term, year);

  if (!results || results.length === 0) {
    return <EmptyComp />;
  }

  return <ViewResult results={results} />;
}

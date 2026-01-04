import { serverFetch } from '../../../lib/serverFetch';

export const getAllStudents = async (
  classId?: string,
  searchTerm?: string,
  page: number = 1,
  limit: number = 10
) => {
  try {
    const queryParams = new URLSearchParams();

    if (classId && classId.trim() !== '') queryParams.set('classId', classId);
    if (searchTerm && searchTerm.trim() !== '')
      queryParams.set('searchTerm', searchTerm);

    queryParams.set('page', String(page));
    queryParams.set('limit', String(limit));

    const queryString = queryParams.toString()
      ? `?${queryParams.toString()}`
      : '';

    const response = await serverFetch.get(`student${queryString}`, {
      next: {
        revalidate: 3600 * 6,
        tags: ['students'],
      },
    });
    const result = await response.json();

    if (result.success) {
      return result.data;
    } else {
      return { students: [], meta: { page, limit, total: 0 } };
    }
  } catch (error) {
    console.error('Error fetching students:', error);
    return { students: [], meta: { page, limit, total: 0 } };
  }
};

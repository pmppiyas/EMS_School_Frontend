import { serverFetch } from '@/lib/serverFetch';

export const updateMe = async (formData: FormData) => {
  try {

    const res = await serverFetch.patch(`user/update-me`, formData, {
      cache: 'no-store',
    });

    if (!res.ok) {
      const errorData = await res.json();
      return {
        success: false,
        message: errorData?.message || 'Failed to update profile',
        errors: errorData?.errors || [],
      };
    }

    const data = await res.json();
    return {
      success: true,
      message: data?.message || 'Profile updated successfully',
      data: data?.data,
    };
  } catch (err) {
    console.error('updateMe Error:', err);
    return {
      success: false,
      message: 'Something went wrong while updating profile',
    };
  }
};

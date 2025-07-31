// src/services/api/apiUtils.js
export const handleApiError = (error) => {
  if (error.response) {
    const { status, data } = error.response;
    return data?.message || `خطأ في السيرفر (${status})`;
  }
  if (error.request) {
    return 'فشل الاتصال بالخادم';
  }
  return 'حدث خطأ غير متوقع';
};

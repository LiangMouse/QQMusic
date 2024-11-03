import request from '@/service/request';

export function getBanners() {
  return request.get('/getSongLists', {
    params: {
      categoryId: 6
    }
  });
}

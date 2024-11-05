export function formatImgSize(imgUrl, size) {
  return imgUrl.replace('/600?', `/${size}?`);
}

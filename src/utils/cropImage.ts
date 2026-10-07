/**
 * Utility to crop image canvas into high-res 1:1 circular/square format
 */

export const createImage = (url: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', (error) => reject(error));
    image.setAttribute('crossOrigin', 'anonymous');
    image.src = url;
  });

export interface Area {
  x: number;
  y: number;
  width: number;
  height: number;
}

export default async function getCroppedImg(
  imageSrc: string,
  pixelCrop: Area,
  rotation = 0
): Promise<string> {
  const image = await createImage(imageSrc);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('Canvas 2D context not available');
  }

  // Set output size to a clean high-res 400x400
  const targetSize = 400;
  canvas.width = targetSize;
  canvas.height = targetSize;

  // Draw smooth scaled cropped area
  ctx.imageSmoothingQuality = 'high';
  ctx.imageSmoothingEnabled = true;

  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    targetSize,
    targetSize
  );

  return canvas.toDataURL('image/jpeg', 0.92);
}

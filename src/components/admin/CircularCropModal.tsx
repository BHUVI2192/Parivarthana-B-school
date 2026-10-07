import React, { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import { ZoomIn, ZoomOut, RotateCw, Check, X, Sparkles } from 'lucide-react';
import getCroppedImg, { Area } from '../../utils/cropImage';

interface CircularCropModalProps {
  imageSrc: string;
  onCropComplete: (croppedDataUrl: string) => void;
  onCancel: () => void;
}

const CircularCropModal: React.FC<CircularCropModalProps> = ({
  imageSrc,
  onCropComplete,
  onCancel,
}) => {
  const [crop, setCrop] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number>(1);
  const [rotation, setRotation] = useState<number>(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const onCropChange = (newCrop: { x: number; y: number }) => {
    setCrop(newCrop);
  };

  const onZoomChange = (newZoom: number) => {
    setZoom(newZoom);
  };

  const handleCropComplete = useCallback((_croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleApplyCrop = async () => {
    if (!croppedAreaPixels) return;
    try {
      setIsProcessing(true);
      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels, rotation);
      onCropComplete(croppedImage);
    } catch (e) {
      console.error('Error cropping image:', e);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 backdrop-blur-md animate-fade-in font-sans">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-gray-100 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-5 bg-[#0D225C] text-white flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="h-8 w-8 rounded-full bg-[#CCB156]/20 border border-[#CCB156]/40 flex items-center justify-center text-[#CCB156]">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <h3 className="font-extrabold text-base tracking-tight">Manual Fit & Circular Crop</h3>
              <p className="text-[11px] text-[#CCB156]">Drag, zoom, and fit the faculty portrait in the circle frame</p>
            </div>
          </div>
          <button
            onClick={onCancel}
            className="p-1.5 text-white/70 hover:text-white rounded-xl hover:bg-white/10 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Cropping Area */}
        <div className="relative w-full h-80 sm:h-96 bg-gray-950">
          <Cropper
            image={imageSrc}
            crop={crop}
            zoom={zoom}
            rotation={rotation}
            aspect={1}
            cropShape="round"
            showGrid={false}
            onCropChange={onCropChange}
            onZoomChange={onZoomChange}
            onCropComplete={handleCropComplete}
            cropSize={{ width: 240, height: 240 }}
            style={{
              containerStyle: { background: '#0a0a0f' },
              cropAreaStyle: {
                border: '4px solid #CCB156',
                boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.7)',
              },
            }}
          />
        </div>

        {/* Control Sliders & Actions */}
        <div className="p-5 bg-gray-50 space-y-4 border-t border-gray-200">
          {/* Zoom Slider */}
          <div className="flex items-center space-x-3">
            <ZoomOut className="h-4 w-4 text-gray-500 flex-shrink-0" />
            <input
              type="range"
              value={zoom}
              min={1}
              max={3}
              step={0.05}
              aria-labelledby="Zoom"
              onChange={(e) => setZoom(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0D225C]"
            />
            <ZoomIn className="h-4 w-4 text-gray-500 flex-shrink-0" />
            <span className="text-xs font-bold text-[#0D225C] w-12 text-right">
              {zoom.toFixed(1)}x
            </span>
          </div>

          {/* Quick Fit / Rotate Bar */}
          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={() => setRotation((prev) => (prev + 90) % 360)}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-white border border-gray-300 rounded-xl text-xs font-semibold text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <RotateCw className="h-3.5 w-3.5" />
              <span>Rotate 90°</span>
            </button>

            <div className="flex items-center space-x-2.5">
              <button
                type="button"
                onClick={onCancel}
                className="px-4 py-2 text-xs font-bold text-gray-600 hover:text-gray-900 rounded-xl hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleApplyCrop}
                disabled={isProcessing}
                className="flex items-center space-x-1.5 px-5 py-2 bg-[#0D225C] hover:bg-[#143282] text-white rounded-xl text-xs font-extrabold shadow-md hover:shadow-lg transition-all"
              >
                <Check className="h-4 w-4 text-[#CCB156]" />
                <span>{isProcessing ? 'Cropping...' : 'Apply & Fit Photo'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularCropModal;

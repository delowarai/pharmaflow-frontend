import { useEffect, useRef, useState } from 'react';

export default function BarcodeScanner() {
  const videoRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setIsReady(true);
        }
      } catch (error) {
        setIsReady(false);
      }
    };

    startCamera();

    return () => {
      const stream = videoRef.current?.srcObject;
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div className="card overflow-hidden">
      <div className="border-b border-slate-200 p-4">
        <h3 className="text-lg font-semibold text-slate-900">Barcode scanner</h3>
      </div>
      <div className="p-4">
        <video ref={videoRef} autoPlay playsInline muted className="h-56 w-full rounded-xl bg-slate-100 object-cover" />
        <p className="mt-3 text-sm text-slate-500">
          {isReady ? 'Camera active and ready to scan.' : 'Camera access unavailable in this browser.'}
        </p>
      </div>
    </div>
  );
}

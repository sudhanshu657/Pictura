import React, { useContext, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';

const ObjectRemover = () => {
  const [originalImage, setOriginalImage] = useState(null);
  const [maskImage, setMaskImage] = useState(null);
  const [resultImage, setResultImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dragActive, setDragActive] = useState({ image: false, mask: false });
  const [mode, setMode] = useState('fast');
  const imageInputRef = useRef(null);
  const maskInputRef = useRef(null);

  const { removeObjectFromImage } = useContext(AppContext);

  const handleFileSelect = (file, type) => {
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (type === 'image') {
          setOriginalImage(e.target.result);
          setResultImage(null);
        } else if (type === 'mask') {
          setMaskImage(e.target.result);
          setResultImage(null);
        }
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please select a valid JPG or PNG image file');
    }
  };

  const handleDrop = (e, type) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(prev => ({ ...prev, [type]: false }));
    
    const file = e.dataTransfer.files[0];
    handleFileSelect(file, type);
  };

  const handleDrag = (e, type) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(prev => ({ ...prev, [type]: true }));
    } else if (e.type === 'dragleave') {
      setDragActive(prev => ({ ...prev, [type]: false }));
    }
  };

  const handleRemoveObject = async () => {
    if (!originalImage || !maskImage) {
      alert('Please select both an image and a mask file');
      return;
    }

    setLoading(true);
    
    // Convert base64 to files
    const imageResponse = await fetch(originalImage);
    const imageBlob = await imageResponse.blob();
    const imageFile = new File([imageBlob], 'image.png', { type: imageBlob.type });

    const maskResponse = await fetch(maskImage);
    const maskBlob = await maskResponse.blob();
    const maskFile = new File([maskBlob], 'mask.png', { type: maskBlob.type });

    try {
      const result = await removeObjectFromImage(imageFile, maskFile, mode);
      if (result) {
        setResultImage(result);
      }
    } catch (error) {
      console.error('Error removing object:', error);
    } finally {
      setLoading(false);
    }
  };

  const resetImages = () => {
    setOriginalImage(null);
    setMaskImage(null);
    setResultImage(null);
    if (imageInputRef.current) {
      imageInputRef.current.value = '';
    }
    if (maskInputRef.current) {
      maskInputRef.current.value = '';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col min-h-[90vh] justify-center items-center px-4"
    >
      <div className="w-full max-w-6xl">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-2 text-center">
          Object Remover
        </h1>
        <p className="text-lg text-gray-600 mb-4 text-center">
          Remove unwanted objects from your images using AI
        </p>
        
        {/* Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold mb-2">How to use:</h3>
          <ol className="text-sm text-gray-700 space-y-1">
            <li>1. Upload your original image</li>
            <li>2. Upload a mask image (black and white PNG where white areas will be removed)</li>
            <li>3. Choose processing mode and click "Remove Object"</li>
          </ol>
        </div>

        {/* Mode Selection */}
        <div className="mb-6 text-center">
          <label className="block text-sm font-medium mb-2">Processing Mode:</label>
          <div className="flex justify-center gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="fast"
                checked={mode === 'fast'}
                onChange={(e) => setMode(e.target.value)}
                className="mr-2"
              />
              Fast (Default)
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="quality"
                checked={mode === 'quality'}
                onChange={(e) => setMode(e.target.value)}
                className="mr-2"
              />
              Quality (HD, slower)
            </label>
          </div>
        </div>

        {/* File Upload Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Original Image Upload */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-center">Original Image</h3>
            {!originalImage ? (
              <div
                className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                  dragActive.image 
                    ? 'border-blue-400 bg-blue-50' 
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                onDragEnter={(e) => handleDrag(e, 'image')}
                onDragLeave={(e) => handleDrag(e, 'image')}
                onDragOver={(e) => handleDrag(e, 'image')}
                onDrop={(e) => handleDrop(e, 'image')}
                onClick={() => imageInputRef.current?.click()}
              >
                <div className="cursor-pointer">
                  <div className="text-3xl mb-2">📷</div>
                  <p className="text-sm mb-1">Drop image or click to browse</p>
                  <p className="text-xs text-gray-500">JPG or PNG (max 30MB, 16MP)</p>
                </div>
                <input
                  ref={imageInputRef}
                  type="file"
                  className="hidden"
                  accept="image/jpeg,image/png"
                  onChange={(e) => handleFileSelect(e.target.files[0], 'image')}
                />
              </div>
            ) : (
              <div className="text-center">
                <img
                  src={originalImage}
                  alt="Original"
                  className="max-w-full max-h-64 rounded-lg shadow-lg mx-auto mb-2"
                />
                <button
                  onClick={() => setOriginalImage(null)}
                  className="text-sm text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            )}
          </div>

          {/* Mask Image Upload */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-center">Mask Image</h3>
            {!maskImage ? (
              <div
                className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                  dragActive.mask 
                    ? 'border-blue-400 bg-blue-50' 
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                onDragEnter={(e) => handleDrag(e, 'mask')}
                onDragLeave={(e) => handleDrag(e, 'mask')}
                onDragOver={(e) => handleDrag(e, 'mask')}
                onDrop={(e) => handleDrop(e, 'mask')}
                onClick={() => maskInputRef.current?.click()}
              >
                <div className="cursor-pointer">
                  <div className="text-3xl mb-2">🎭</div>
                  <p className="text-sm mb-1">Drop mask or click to browse</p>
                  <p className="text-xs text-gray-500">Black & White PNG (max 30MB)</p>
                </div>
                <input
                  ref={maskInputRef}
                  type="file"
                  className="hidden"
                  accept="image/png"
                  onChange={(e) => handleFileSelect(e.target.files[0], 'mask')}
                />
              </div>
            ) : (
              <div className="text-center">
                <img
                  src={maskImage}
                  alt="Mask"
                  className="max-w-full max-h-64 rounded-lg shadow-lg mx-auto mb-2"
                />
                <button
                  onClick={() => setMaskImage(null)}
                  className="text-sm text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Result Image */}
        {(loading || resultImage) && (
          <div className="mb-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Result</h3>
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-500"></div>
              </div>
            ) : (
              <img
                src={resultImage}
                alt="Result"
                className="max-w-full max-h-96 rounded-lg shadow-lg mx-auto"
              />
            )}
            {loading && (
              <p className="mt-4 text-sm text-gray-600">
                Removing objects from your image... ({mode} mode)
              </p>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          {originalImage && maskImage && !loading && (
            <button
              onClick={handleRemoveObject}
              disabled={loading}
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transform transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Processing...' : 'Remove Object'}
            </button>
          )}

          {resultImage && (
            <a
              href={resultImage}
              download="object-removed-image.png"
              className="bg-zinc-900 text-white px-8 py-3 rounded-lg hover:shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              Download Result
            </a>
          )}

          {(originalImage || maskImage || resultImage) && (
            <button
              onClick={resetImages}
              className="border border-zinc-900 text-black px-8 py-3 rounded-lg hover:bg-gray-50 transform transition-all duration-300"
            >
              Start Over
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ObjectRemover;
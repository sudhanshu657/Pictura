import React, { useContext, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';

const BackgroundRemover = () => {
  const [originalImage, setOriginalImage] = useState(null);
  const [resultImage, setResultImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [transparencyMode, setTransparencyMode] = useState('return_input_if_non_opaque');
  const fileInputRef = useRef(null);

  const { removeBackgroundFromImage } = useContext(AppContext);

  const handleFileSelect = (file) => {
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/webp')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setOriginalImage(e.target.result);
        setResultImage(null);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please select a valid JPG, PNG, or WEBP image file');
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const file = e.dataTransfer.files[0];
    handleFileSelect(file);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    handleFileSelect(file);
  };

  const handleRemoveBackground = async () => {
    if (!originalImage) {
      alert('Please select an image first');
      return;
    }

    setLoading(true);
    
    // Convert base64 to file
    const response = await fetch(originalImage);
    const blob = await response.blob();
    const file = new File([blob], 'image.png', { type: blob.type });

    try {
      const result = await removeBackgroundFromImage(file, transparencyMode);
      if (result) {
        setResultImage(result);
      }
    } catch (error) {
      console.error('Error removing background:', error);
    } finally {
      setLoading(false);
    }
  };

  const resetImages = () => {
    setOriginalImage(null);
    setResultImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
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
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-2 text-center">
          Background Remover
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Remove backgrounds from your images instantly with AI
        </p>

        {/* Transparency Options */}
        <div className="mb-6 text-center">
          <label className="block text-sm font-medium mb-2">Transparency Handling:</label>
          <select
            value={transparencyMode}
            onChange={(e) => setTransparencyMode(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="return_input_if_non_opaque">Keep original if already transparent</option>
            <option value="discard_alpha_layer">Remove existing transparency</option>
          </select>
        </div>

        {/* File Upload Area */}
        {!originalImage && (
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center mb-6 transition-colors ${
              dragActive 
                ? 'border-blue-400 bg-blue-50' 
                : 'border-gray-300 hover:border-gray-400'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <div className="cursor-pointer">
              <div className="text-4xl mb-4">🖼️</div>
              <p className="text-lg mb-2">Drop your image here or click to browse</p>
              <p className="text-sm text-gray-500">Supports JPG, PNG, and WEBP files (max 30MB, 25MP)</p>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              accept="image/jpeg,image/png,image/webp"
              onChange={handleFileInputChange}
            />
          </div>
        )}

        {/* Image Preview and Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {originalImage && (
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Original Image</h3>
              <div className="relative">
                <img
                  src={originalImage}
                  alt="Original"
                  className="max-w-full max-h-96 rounded-lg shadow-lg mx-auto"
                />
              </div>
            </div>
          )}

          {resultImage && (
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Background Removed</h3>
              <div className="relative bg-checkerboard bg-opacity-50 rounded-lg p-4">
                <img
                  src={resultImage}
                  alt="Result"
                  className="max-w-full max-h-96 rounded-lg shadow-lg mx-auto"
                />
              </div>
            </div>
          )}

          {loading && originalImage && !resultImage && (
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Processing...</h3>
              <div className="flex justify-center items-center h-96">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
              </div>
              <p className="mt-4 text-sm text-gray-600">Removing background from your image...</p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          {originalImage && !loading && (
            <button
              onClick={handleRemoveBackground}
              disabled={loading}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transform transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Processing...' : 'Remove Background'}
            </button>
          )}

          {resultImage && (
            <a
              href={resultImage}
              download="background-removed-image.png"
              className="bg-zinc-900 text-white px-8 py-3 rounded-lg hover:shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              Download Result
            </a>
          )}

          {(originalImage || resultImage) && (
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

export default BackgroundRemover;
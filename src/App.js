// App.js
import React, { useState } from 'react';
import FileUploader from './components/FilerUploader';
import FileList from './components/Filelist';
import FileReader from './components/FileReader';

const App = () => {
  const [selectedFileId, setSelectedFileId] = useState(null);

  const handleFileSelect = (fileId) => {
    setSelectedFileId(fileId);
  };

  return (
    <div>
      <h1>File Management App</h1>
      <FileUploader />
      <FileList onSelectFile={handleFileSelect} />
      {selectedFileId && <FileReader fileId={selectedFileId} />}
    </div>
  );
};

export default App;
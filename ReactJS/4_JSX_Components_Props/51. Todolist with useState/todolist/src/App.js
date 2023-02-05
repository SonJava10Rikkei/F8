import React, { useState } from 'react';

function App() {
  const [job, setJob] = useState('');
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem('jobs')) || [];
    return storageJobs;
  });
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleSubmit = () => {
    if (editingIndex === -1) {
      setJobs(prev => {
        const newJobs = [...prev, job];

        // lưu vào localStorage
        const jonJobs = JSON.stringify(newJobs);
        localStorage.setItem('jobs', jonJobs);

        return newJobs;
      });
    } else {
      setJobs(prev => {
        const newJobs = [...prev];
        newJobs[editingIndex] = job;

        // lưu vào localStorage
        const jonJobs = JSON.stringify(newJobs);
        localStorage.setItem('jobs', jonJobs);

        return newJobs;
      });
      setEditingIndex(-1);
    }

    setJob('');
  };

  const handleEdit = index => {
    setJob(jobs[index]);
    setEditingIndex(index);
  };

  const handleDelete = index => {
    setJobs(prev => {
      const newJobs = [...prev];
      newJobs.splice(index, 1);

      // lưu vào localStorage
      const jonJobs = JSON.stringify(newJobs);
      localStorage.setItem('jobs', jonJobs);

      return newJobs;
    });
  };

  return (
    <div style={{ padding: 32 }}>
      <input value={job} onChange={e => setJob(e.target.value)} onKeyUp={e => {
        if (e.key === 'Enter') {
          handleSubmit()
        }
      }} />
      <button onClick={handleSubmit}>
        {editingIndex === -1 ? 'Add' : 'Update'}
      </button>

      <ul>
        {jobs.map((jobs, index) => (
          <li key={index}>
            {jobs}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

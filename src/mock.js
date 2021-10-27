const mockData = {
  buckets: Array.from({length: 5}, (_, idx) => ({
      bucket_id: String(idx + 1),
      title: `Bucket-${String.fromCharCode(65 + idx)}`
    })),
  tasks: Array.from({ length: 10 }, (_, idx) => ({
    id: `task-${idx+1}`,
    title: `Task-${idx+1}`,
    bucket_id: String(Math.floor(Math.random() * 5) + 1)
  })),
};

export default mockData;
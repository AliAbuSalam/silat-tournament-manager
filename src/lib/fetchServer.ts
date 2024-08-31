const fetchServer = async (path: string, options?: {
  cache: 'force-cache' | 'no-store',
  revalidate: false | 0 | number,
  next: {
    tags: string[]
  }
}) => {
  const serverUrl = 'http://localhost:3000'
  const address = new URL(path, serverUrl);
  return await fetch(address, options);
}

export default fetchServer;
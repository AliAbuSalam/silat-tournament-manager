const fetchServer = async (path: string, options?: {
  cache: 'force-cache' | 'no-store',
  revalidate: false | 0 | number,
  next: {
    tags: string[]
  }
}) => {
  try {
    const serverUrl = 'http://localhost:8000'
    const address = new URL(path, serverUrl);
    const response = await fetch(address, options);
    return response;
  } catch(error){
    return {
      status: 'error',
      errorObject: error
    } satisfies {
      status: 'error',
      errorObject: Error | unknown
    }
  }
}

export default fetchServer;
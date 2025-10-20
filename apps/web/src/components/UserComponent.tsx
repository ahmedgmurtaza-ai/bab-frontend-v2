import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Button, Input } from '@bab/design-system';
import { useUserStore } from '../store';

// Define user type
type User = {
  id: number;
  name: string;
  email: string;
  username: string;
};

// Mock API function to fetch user
const fetchUser = async (): Promise<User> => {
  // Simulate API call with delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Return mock user data
  return {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    username: 'johndoe'
  };
};

const UserComponent: React.FC = () => {
  const { user, setUser, clearUser } = useUserStore();
  
  const {
    data,
    isLoading,
    isError,
    error,
    refetch
  } = useQuery({
    queryKey: ['user'],
    queryFn: fetchUser,
    enabled: false, // Only fetch when button is clicked
  });

  const handleFetchUser = () => {
    refetch();
  };

  const handleSetUser = () => {
    if (data) {
      setUser({ name: data.name, email: data.email });
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {(error as Error).message}</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">User Data Example</h2>
      
      {user ? (
        <div className="mb-4">
          <h3 className="font-medium">Current User:</h3>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <Button variant="ghost" onClick={clearUser} className="mt-2">Clear User</Button>
        </div>
      ) : (
        <p className="mb-4">No user data loaded</p>
      )}
      
      {data && !user && (
        <div className="mb-4">
          <h3 className="font-medium">Fetched User:</h3>
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
          <Button variant="secondary" onClick={handleSetUser} className="mt-2">Set as Current User</Button>
        </div>
      )}
      
      <div className="flex gap-2">
        <Button variant="primary" onClick={handleFetchUser} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Fetch User Data'}
        </Button>
        <Button variant="outline" onClick={() => refetch()}>Refetch</Button>
      </div>
    </div>
  );
};

export default UserComponent;
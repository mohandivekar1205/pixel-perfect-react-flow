import React, { useState } from 'react';
import { searchUser } from '@/api/userServiceApi';

interface User {
  id: number;
  name: string;
  username: string;
}

interface Props {
  onUserSelect: (user: User) => void;
}

const SearchBox: React.FC<Props> = ({ onUserSelect }) => {
  const [query, setQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === '') {
      setFilteredUsers([]);
      return;
    }

    try {
      console.log(value)
      const response = await searchUser(value);
      // Adjust according to your API response structure
      setFilteredUsers(response.data || []);
      
    } catch (error) {
      setFilteredUsers([]);
    }
  };

  return (
    <div className="m-2 max-w-[65%] mx-auto relative z-10">
      {/* Search Box */}
      <div className="bg-zinc-800 rounded-md px-3 py-2">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search users..."
          className="w-full bg-transparent text-white outline-none text-sm"
        />
      </div>

      {/* Title and List */}
      {filteredUsers.length > 0 && (
        <div className="absolute left-0 right-0 mt-1 bg-zinc-800 border border-zinc-700 rounded shadow-lg max-h-48 overflow-y-auto">
          {/* Title for the list */}
          <div className="px-4 py-2 text-sm font-bold text-white border-b border-zinc-700">
            Name
          </div>
          {filteredUsers.map((user: any, index: number) => (
            <div
              key={user.id || index}
              className="px-4 py-2 hover:bg-zinc-700 cursor-pointer text-sm text-white"
              onClick={() => {
                console.log('Selected user:', user); // Add this line
                setQuery(user.name || user.username || '');
                setFilteredUsers([]);
                onUserSelect(user); // Pass selected user to parent
              }}
            >
              {user.name || user.username || ''}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
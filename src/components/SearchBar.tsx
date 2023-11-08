import React, { useState } from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

interface SearchBarProps {
  onSearch: (searchValue: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    onSearch(searchValue);
  };

  return (
    <Input
      placeholder="Поиск по заголовку"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      onPressEnter={handleSearch}
      suffix={<SearchOutlined onClick={handleSearch} />}
    />
  );
};

export default SearchBar;


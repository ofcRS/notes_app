import React from 'react';
import { Select } from 'antd';

interface FilterByCategoryProps {
  categories: string[];
  onChange: (selectedCategory: string) => void;
}

const FilterByCategory: React.FC<FilterByCategoryProps> = ({ categories, onChange }) => {
  return (
    <Select placeholder="Фильтровать по категории" onChange={onChange}>
      {categories.map((category) => (
        <Select.Option key={category} value={category}>
          {category}
        </Select.Option>
      ))}
    </Select>
  );
};

export default FilterByCategory;


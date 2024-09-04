import { useState, FC } from 'react';

interface KeywordsInputProps {
  value: string[];
  onChange: (keywords: string[]) => void;
}

const KeywordsInput: FC<KeywordsInputProps> = ({ value, onChange }) => {
  const [keyword, setKeyword] = useState<string>('');

  const handleAddKeyword = () => {
    if (keyword.trim()) {
      onChange([...value, keyword.trim()]);
      setKeyword(''); // Clear the input after adding
    }
  };

  const handleRemoveKeyword = (indexToRemove: number) => {
    onChange(value.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Add keyword"
          className="input-field"
        />
        <button type="button" onClick={handleAddKeyword} className="add-button">
          Add
        </button>
      </div>
      <ul className="keywords-list">
        {value.map((keyword, index) => (
          <li key={index} className="keyword-item">
            {keyword}
            <button
              type="button"
              onClick={() => handleRemoveKeyword(index)}
              className="remove-button"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KeywordsInput;

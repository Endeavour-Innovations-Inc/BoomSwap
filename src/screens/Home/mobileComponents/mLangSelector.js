import React, { useState } from 'react';

const MLanguageSelector = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('РУС');

  const languages = [
    { code: 'ru', label: 'РУС' },
    { code: 'en', label: 'ENG' },
    { code: 'es', label: 'ESP' },
    { code: 'fr', label: 'FRA' },
    { code: 'de', label: 'DEU' },
    { code: 'it', label: 'ITA' },
    { code: 'pt', label: 'POR' },
    { code: 'zh', label: '中文' },
    // Add other languages here
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language.label);
    setIsDropdownOpen(false);
    // Handle language change logic here
    // For example, you can call a translation function here
    translatePage(language.code);
  };

  const translatePage = (languageCode) => {
    // Placeholder for translation logic
    // You can integrate an actual translation library or API here
    console.log(`Page should be translated to ${languageCode}`);
  };

  const frame4Style = {
    alignItems: 'center',
    display: 'flex',
    gap: '8px', // Reduced gap
    position: 'relative',
    cursor: 'pointer',
    paddingRight: '15px', // Add right padding here
  };

  const textWrapper5Style = {
    color: '#c4c4c4',
    fontFamily: '"TT Firs Neue-Regular", Helvetica',
    fontSize: '14px', // Reduced font size
    fontWeight: '400',
    lineHeight: '20px', // Reduced line height
    position: 'relative',
    whiteSpace: 'nowrap',
  };

  const dropdownOpenStyle = {
    position: 'absolute',
    bottom: '100%',
    left: '0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#101014',
    display: 'block',
    fontFamily: '"TT Firs Neue-Regular", Helvetica',
    fontSize: '14px', // Reduced font size
    fontWeight: '400',
    maxHeight: '150px', // Set max height
    overflowY: 'scroll', // Add scroll if content exceeds max height
  };

  const languageItemStyle = {
    padding: '6px 12px', // Reduced padding
    color: '#c4c4c4',
    cursor: 'pointer',
  };

  return (
    <div style={frame4Style} onClick={toggleDropdown}>
      <div style={textWrapper5Style}>{selectedLanguage}</div>
      <img alt="Vector" src="/img/vector-332.svg" />

      <div style={isDropdownOpen ? dropdownOpenStyle : { display: 'none' }}>
        {languages.map((language) => (
          <div
            key={language.code}
            style={languageItemStyle}
            onClick={() => selectLanguage(language)}
          >
            <span>{language.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MLanguageSelector;
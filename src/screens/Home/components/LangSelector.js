import React, { useState } from 'react';

const LanguageSelector = () => {
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
    gap: '11px',
    position: 'relative',
    cursor: 'pointer',
  };

  const frame5Style = {
    alignItems: 'center',
    display: 'flex',
    gap: '5px',
    position: 'relative',
  };

  const textWrapper5Style = {
    color: '#c4c4c4',
    fontFamily: '"TT Firs Neue-Regular", Helvetica',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '24px',
    position: 'relative',
    whiteSpace: 'nowrap',
  };

  const dropdownOpenStyle = {
    position: 'absolute',
    bottom: '100%', // Changed to pop up above
    left: '0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#101014',
    display: 'block',
    fontFamily: '"TT Firs Neue-Regular", Helvetica',
    fontSize: '16px',
    fontWeight: '400',
  };

  const languageItemStyle = {
    padding: '8px 16px',
    color: '#c4c4c4',
    cursor: 'pointer',
  };

  return (
    <div style={frame4Style} onClick={toggleDropdown}>
      <div style={frame5Style}>
        <img alt="Vector" src="/img/vector-332.svg" />
      </div>
      <div style={textWrapper5Style}>{selectedLanguage}</div>

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

export default LanguageSelector;

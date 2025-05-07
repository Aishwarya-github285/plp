'use client';

import { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaCheck } from 'react-icons/fa';

const filterOptions = [
  { label: 'IDEAL FOR', items: ['Men', 'Women', 'Baby & Kids'] },
  { label: 'OCCASION', items: ['Casual', 'Party', 'Formal'] },
  { label: 'WORK', items: ['Office', 'Travel', 'Gym'] },
  { label: 'FABRIC', items: ['Cotton', 'Polyester', 'Silk'] },
  { label: 'SEGMENT', items: ['Premium', 'Basic'] },
  { label: 'SUITABLE FOR', items: ['Summer', 'Winter'] },
  { label: 'RAW MATERIALS', items: ['Wool', 'Leather'] },
  { label: 'PATTERN', items: ['Striped', 'Solid', 'Printed'] },
];

export default function SidebarFilters() {
  const [showFilters, setShowFilters] = useState(false);
  const [expanded, setExpanded] = useState({});
  const [customizable, setCustomizable] = useState(false);
  const [sortDropdown, setSortDropdown] = useState(false);
  const [sortOption, setSortOption] = useState('RECOMMENDED');

  const sortOptions = [
    'RECOMMENDED',
    'NEWEST FIRST',
    'POPULAR',
    'PRICE : HIGH TO LOW',
    'PRICE : LOW TO HIGH',
  ];

  const toggleSection = (label) => {
    setExpanded(prev => ({ ...prev, [label]: !prev[label] }));
  };

  const handleSortChange = (option) => {
    setSortOption(option);
    setSortDropdown(false);
  };

  return (
    <div>
      {/* TOP BAR: Items Count | Show/Hide Filter | Sort */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '2px solid orange',
        padding: '1rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <strong>3425 ITEMS</strong>
          <button
            onClick={() => setShowFilters(prev => !prev)}
            style={{
              border: 'none',
              background: 'none',
              color: 'gray',
              cursor: 'pointer',
              textDecoration: 'underline',
              fontSize: '0.9rem'
            }}
          >
            {showFilters ? 'HIDE FILTER' : 'SHOW FILTER'}
          </button>
        </div>

        {/* Right side: Sort Dropdown */}
        <div style={{ position: 'relative' }}>
          <div
            onClick={() => setSortDropdown(prev => !prev)}
            style={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontWeight: 'bold'
            }}
          >
            {sortOption}
            {sortDropdown ? <FaChevronUp /> : <FaChevronDown />}
          </div>

          {sortDropdown && (
            <div style={{
              position: 'absolute',
              top: '100%',
              right: 0,
              backgroundColor: 'white',
              boxShadow: '0 0 5px rgba(0,0,0,0.1)',
              padding: '0.5rem',
              zIndex: 10,
              width: '200px'
            }}>
              {sortOptions.map(option => (
                <div
                  key={option}
                  onClick={() => handleSortChange(option)}
                  style={{
                    padding: '0.5rem',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontWeight: option === sortOption ? 'bold' : 'normal'
                  }}
                >
                  {option}
                  {option === sortOption && <FaCheck />}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div style={{ width: '250px', padding: '1rem', borderRight: '1px solid #ccc' }}>
          <div style={{ marginTop: '1rem' }}>
            <label>
              <input
                type="checkbox"
                checked={customizable}
                onChange={(e) => setCustomizable(e.target.checked)}
              />
              &nbsp;<strong>CUSTOMIZABLE</strong>
            </label>
          </div>

          {filterOptions.map(filter => (
            <div key={filter.label} style={{ marginTop: '1rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
              <div
                onClick={() => toggleSection(filter.label)}
                style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }}
              >
                <strong>{filter.label}</strong>
                {expanded[filter.label] ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {expanded[filter.label] && (
                <div style={{ marginTop: '0.5rem', paddingLeft: '1rem' }}>
                  <p style={{ fontSize: '0.9rem', color: '#999', marginBottom: '0.5rem', cursor: 'pointer' }}>Unselect all</p>
                  {filter.items.map(item => (
                    <div key={item}>
                      <label>
                        <input type="checkbox" />
                        &nbsp;{item}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

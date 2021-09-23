import React from 'react';
import PropTypes from 'prop-types';

function Search({ searchValue, setSearchValue, history }) {
  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="header">
      <div className="header__icon">
        <a href="/" target="_self">
          <img
            width={35}
            height={35}
            src={process.env.PUBLIC_URL + '/img/github_logo.svg'}
            alt="Github icon"
          />
        </a>
      </div>
      <div className="header__search">
        <input
          onChange={onChangeSearchInput}
          value={searchValue}
          type="text"
          placeholder="Search or jump to..."
        />
        <div className={history.length === 0 ? 'nonValue' : 'header__search-value'}>
          {history.map((item, index) => (
            <ul key={index}>
              <li
                onClick={() => {
                  if (item !== searchValue) setSearchValue(item);
                }}>
                <svg aria-hidden="true" height="16" width="16" viewBox="0 0 16 16" version="1.1">
                  <path
                    fillRule="evenodd"
                    d="M 2 2.5 A 2.5 2.5 0 0 1 4.5 0 h 8.75 a 0.75 0.75 0 0 1 0.75 0.75 v 12.5 a 0.75 0.75 0 0 1 -0.75 0.75 h -2.5 a 0.75 0.75 0 1 1 0 -1.5 h 1.75 v -2 h -8 a 1 1 0 0 0 -0.714 1.7 a 0.75 0.75 0 0 1 -1.072 1.05 A 2.495 2.495 0 0 1 2 11.5 v -9 Z m 10.5 -1 V 9 h -8 c -0.356 0 -0.694 0.074 -1 0.208 V 2.5 a 1 1 0 0 1 1 -1 h 8 Z M 5 12.25 v 3.25 a 0.25 0.25 0 0 0 0.4 0.2 l 1.45 -1.087 a 0.25 0.25 0 0 1 0.3 0 L 8.6 15.7 a 0.25 0.25 0 0 0 0.4 -0.2 v -3.25 a 0.25 0.25 0 0 0 -0.25 -0.25 h -3.5 a 0.25 0.25 0 0 0 -0.25 0.25 Z"></path>
                </svg>
                {item}
              </li>
            </ul>
          ))}
        </div>
      </div>
      <div className="header__opt" data-title="These options have not yet been implemented.">
        <img
          width={18}
          height={18}
          src={process.env.PUBLIC_URL + '/img/bell.svg'}
          alt="opt icon1"
        />
        <img
          width={18}
          height={18}
          src={process.env.PUBLIC_URL + '/img/plus.svg'}
          alt="opt icon1"
        />
        <img
          width={18}
          height={18}
          src={process.env.PUBLIC_URL + '/img/user.svg'}
          alt="opt icon1"
        />
      </div>
    </div>
  );
}

Search.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  history: PropTypes.array.isRequired,
};

export default Search;

import React from 'react';
import { format, parse } from 'date-fns';
import PropTypes from 'prop-types';

function ListItems({ items }) {
  return (
    <div className="content">
      {items.length === 0 ? (
        <h2>&#9757;&#65039; Enter a keyword to search for the repository</h2>
      ) : (
        <div className="content__list">
          <div className="content__list-title">
            <h2>{items.length} repository result</h2>
          </div>
          <div className="content__list-block">
            {items.map((item, id) => (
              <ul key={id}>
                <li>
                  <svg aria-hidden="true" height="16" width="16" viewBox="0 0 16 16" version="1.1">
                    <path
                      fillRule="evenodd"
                      d="M 2 2.5 A 2.5 2.5 0 0 1 4.5 0 h 8.75 a 0.75 0.75 0 0 1 0.75 0.75 v 12.5 a 0.75 0.75 0 0 1 -0.75 0.75 h -2.5 a 0.75 0.75 0 1 1 0 -1.5 h 1.75 v -2 h -8 a 1 1 0 0 0 -0.714 1.7 a 0.75 0.75 0 0 1 -1.072 1.05 A 2.495 2.495 0 0 1 2 11.5 v -9 Z m 10.5 -1 V 9 h -8 c -0.356 0 -0.694 0.074 -1 0.208 V 2.5 a 1 1 0 0 1 1 -1 h 8 Z M 5 12.25 v 3.25 a 0.25 0.25 0 0 0 0.4 0.2 l 1.45 -1.087 a 0.25 0.25 0 0 1 0.3 0 L 8.6 15.7 a 0.25 0.25 0 0 0 0.4 -0.2 v -3.25 a 0.25 0.25 0 0 0 -0.25 -0.25 h -3.5 a 0.25 0.25 0 0 0 -0.25 0.25 Z"></path>
                  </svg>

                  <div>
                    <a href={item.html_url}>{item.full_name}</a>
                    <p className="description">{item.description}</p>
                    <span>
                      <svg
                        aria-label="star"
                        role="img"
                        height="16"
                        width="16"
                        viewBox="0 0 16 16"
                        version="1.1"
                        data-view-component="true">
                        <path
                          fillRule="evenodd"
                          d="M 8 0.25 a 0.75 0.75 0 0 1 0.673 0.418 l 1.882 3.815 l 4.21 0.612 a 0.75 0.75 0 0 1 0.416 1.279 l -3.046 2.97 l 0.719 4.192 a 0.75 0.75 0 0 1 -1.088 0.791 L 8 12.347 l -3.766 1.98 a 0.75 0.75 0 0 1 -1.088 -0.79 l 0.72 -4.194 L 0.818 6.374 a 0.75 0.75 0 0 1 0.416 -1.28 l 4.21 -0.611 L 7.327 0.668 A 0.75 0.75 0 0 1 8 0.25 Z m 0 2.445 L 6.615 5.5 a 0.75 0.75 0 0 1 -0.564 0.41 l -3.097 0.45 l 2.24 2.184 a 0.75 0.75 0 0 1 0.216 0.664 l -0.528 3.084 l 2.769 -1.456 a 0.75 0.75 0 0 1 0.698 0 l 2.77 1.456 l -0.53 -3.084 a 0.75 0.75 0 0 1 0.216 -0.664 l 2.24 -2.183 l -3.096 -0.45 a 0.75 0.75 0 0 1 -0.564 -0.41 L 8 2.694 v 0.001 Z"></path>
                      </svg>
                      {Math.abs(Number(item.stargazers_count))}
                    </span>
                    <span>Language: {item.language}</span>
                    <span>
                      Created:{' '}
                      {format(
                        parse(item.created_at, "yyyy-MM-dd'T'HH:mm:ss'Z'", new Date()),
                        'yyyy-MM-dd',
                      )}
                    </span>
                    <span>
                      Updated:{' '}
                      {format(
                        parse(item.updated_at, "yyyy-MM-dd'T'HH:mm:ss'Z'", new Date()),
                        'yyyy-MM-dd',
                      )}
                    </span>
                  </div>
                </li>
              </ul>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

ListItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

ListItems.defaultProps = {
  items: [],
};

export default ListItems;

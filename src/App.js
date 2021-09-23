import axios from 'axios';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ListItems, Search } from './components';
import { setItems, setHistory } from './redux/actions';

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const [count, setCount] = React.useState(null);
  const dispatch = useDispatch();
  const { repos, historySearch } = useSelector(({ items, historySearch }) => {
    return {
      repos: items,
      historySearch: historySearch,
    };
  });

  React.useEffect(() => {
    let timerId;
    const debounce = (func, delay) => {
      clearTimeout(timerId);
      timerId = setTimeout(func, delay);
    };

    debounce(() => {
      axios
        .get(`https://api.github.com/search/repositories?per_page=100&q=${searchValue}`)
        .then(({ data }) => {
          if (historySearch.length > 4) {
            dispatch(
              setItems(
                Object.keys(repos)
                  .filter((key) => key !== historySearch[0])
                  .reduce((obj, key) => {
                    obj[key] = repos[key];
                    return obj;
                  }, {}),
              ),
            );
            dispatch(setHistory(historySearch.slice(1).concat(searchValue)));
          } else {
            dispatch(setHistory(historySearch.concat(searchValue)));
            dispatch(
              setItems({
                ...repos,
                [searchValue]: data.items,
              }),
            );
            setCount(data.total_count);
          }
        });
    }, 500);
  }, [dispatch, historySearch, repos, searchValue]);

  return (
    <div className="wrapper">
      <Search setSearchValue={setSearchValue} searchValue={searchValue} history={historySearch} />
      <ListItems items={repos[historySearch[historySearch.length - 1]]} count={count} />
    </div>
  );
}

export default App;

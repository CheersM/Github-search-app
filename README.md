### Github search app

It`s a single page application,
which lists the repositories and organizations by search term.

## Options:

1. Used external State management Redux.
2. Used by type checking with the library 'PropTypes'.
3. Used scss / sass and responsive media queries for mobile devices.
4. Search have debounce input (means that request for the data after 500 ms after the user finished printing text, not with Enter press or other).
5. Previous requests are shown in the history module, the maximum number of displayed requests is 5 (meaning that we keep 5 new results, and if we add the new one, the first result deleted). The history is stored in localstorege, and after reloading the page, options for previous requests are available to the user. History available after reloading the page or mobile application.

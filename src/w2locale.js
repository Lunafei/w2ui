/**
 * Part of w2ui 2.0 library
 *  - Dependencies: none
 *
 * These are the master locale settings that will be used by w2utils
 *
 * "locale" should be the IETF language tag in the form xx-YY,
 * where xx is the ISO 639-1 language code ( see https://en.wikipedia.org/wiki/ISO_639-1 ) and
 * YY is the ISO 3166-1 alpha-2 country code ( see https://en.wikipedia.org/wiki/ISO_3166-2 )
 */

const w2locale = {
    'locale'            : 'en-US',
    'dateFormat'        : 'm/d/yyyy',
    'timeFormat'        : 'hh:mi pm',
    'datetimeFormat'    : 'm/d/yyyy|hh:mi pm',
    'currencyPrefix'    : '$',
    'currencySuffix'    : '',
    'currencyPrecision' : 2,
    'groupSymbol'       : ',', // aka "thousands separator"
    'decimalSymbol'     : '.',
    'shortmonths'       : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    'fullmonths'        : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    'shortdays'         : ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    'fulldays'          : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    'weekStarts'        : 'S', // can be "M" for Monday or "S" for Sunday
    // phrases used in w2ui, should be empty for original language
    // keep these up-to-date and in sorted order
    // value = "---" to easier see what to translate
    'phrases': {
        '${count} letters or more...': '---',
        'Add new record': '---',
        'Add New': '---',
        'Advanced Search': '---',
        'after': '---',
        'AJAX error. See console for more details.': '---',
        'All Fields': '---',
        'All': '---',
        'Any': '---',
        'Are you sure you want to delete ${count} ${records}?': '---',
        'Attach files by dragging and dropping or Click to Select': '---',
        'before': '---',
        'begins with': '---',
        'begins': '---',
        'between': '---',
        'buffered': '---',
        'Cancel': '---',
        'Close': '---',
        'Column': '---',
        'Confirmation': '---',
        'contains': '---',
        'Copied': '---',
        'Copy to clipboard': '---',
        'Current Date & Time': '---',
        'Delete selected records': '---',
        'Delete': '---',
        'Do you want to delete search item "${item}"?': '---',
        'Edit selected record': '---',
        'Edit': '---',
        'Empty list': '---',
        'ends with': '---',
        'ends': '---',
        'Field should be at least ${count} characters.': '---',
        'Hide': '---',
        'in': '---',
        'is not': '---',
        'is': '---',
        'less than': '---',
        'Line #': '---',
        'Load ${count} more...': '---',
        'Loading...': '---',
        'Maximum number of files is ${count}': '---',
        'Maximum total size is ${count}': '---',
        'Modified': '---',
        'more than': '---',
        'Multiple Fields': '---',
        'Name': '---',
        'No items found': '---',
        'No matches': '---',
        'No': '---',
        'none': '---',
        'Not a float': '---',
        'Not a hex number': '---',
        'Not a valid date': '---',
        'Not a valid email': '---',
        'Not alpha-numeric': '---',
        'Not an integer': '---',
        'Not in money format': '---',
        'not in': '---',
        'Notification': '---',
        'of': '---',
        'Ok': '---',
        'Opacity': '---',
        'Record ID': '---',
        'record': '---',
        'records': '---',
        'Refreshing...': '---',
        'Reload data in the list': '---',
        'Remove': '---',
        'Request aborted.': '---',
        'Required field': '---',
        'Reset': '---',
        'Restore Default State': '---',
        'Returned data is not in valid JSON format.': '---',
        'Save changed records': '---',
        'Save Grid State': '---',
        'Save': '---',
        'Saved Searches': '---',
        'Saving...': '---',
        'Search took ${count} seconds': '---',
        'Search': '---',
        'Select Hour': '---',
        'Select Minute': '---',
        'selected': '---',
        'Server Response ${count} seconds': '---',
        'Show/hide columns': '---',
        'Show': '---',
        'Size': '---',
        'Skip': '---',
        'Sorting took ${count} seconds': '---',
        'Type to search...': '---',
        'Type': '---',
        'Yes': '---',
        'Yesterday': '---',
        'Your remote data source record count has changed, reloading from the first record.': '---'
    }
}
export { w2locale }
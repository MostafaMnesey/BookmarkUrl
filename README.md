# BookmarkUrl
Route js Assiment

index.html:
This is the HTML file for a Bookmarker web application. It defines the structure of the webpage with:


A main heading "Bookmarker" with a highlighted style
A subtitle "Bookmark your favorite sites"
Sections for entering website name and URL
A table placeholder for displaying bookmarks
Uses custom CSS classes for styling and typography


Style.css:
This is the CSS file that provides styling for the Bookmarker application. It includes:


Global reset and box-sizing
Custom font styling for different text elements
Color schemes and hover effects
Specific styles for buttons, inputs, and form controls
Custom highlight and selection styles
Responsive and visually appealing design with warm color palette


index.js:
This is the JavaScript file that provides functionality for the Bookmarker app. Key features include:


Storing bookmarks in local storage
Adding new bookmarks with validation
Displaying bookmarks in a table
Deleting bookmarks
Regex-based validation for site name and URL
Using SweetAlert for user notifications
Functions for:

addBookmark(): Adds a new bookmark
displayBookmarks(): Renders bookmarks in the table
deleteBookmark(): Removes a bookmark
validate(): Checks input against regex patterns
validateall(): Performs comprehensive validation before submission

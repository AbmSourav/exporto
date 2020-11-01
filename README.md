# Exporto
A tiny JavaScript Library. It Download data in your choosen file type.
It'll create a button, and download data in file.

### Options:
`targetNode` (required) - Dom Element.
`id` (required) - unique Button ID.
`data` (required) - Data that will be downloaded
`fileType` (optional) - Default: `text/plain`
`fileExtension` (optional) - Default: `.txt`
`className` (optional) - Default: `''`
`buttonText` (optional) - Default: `Button`

```js
const expt = document.querySelector('.export');
const data = 'Data';

const options = {
	targetNode: expt,
	id: 'abm',
	data: "<h1>Sourav</h1>",
	fileType: 'text/html',
	fileExtension: '.html'
} 
Exporto( options ).loaded();
```

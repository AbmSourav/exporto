# Exporto
**Development Branch** <br>
A tiny JavaScript Library. It Download data in your choosen file type.
It'll create a button, and download data in file.

### Options:
`targetNode` (required) - Dom Element. <br>
`id` (required) - unique Button ID. <br>
`data` (required) - Data that will be downloaded. <br>
`fileType` (optional) - Default: `text/plain`. <br>
`fileExtension` (optional) - Default: `.txt` <br>
`className` (optional) - Default: `''` <br>
`buttonText` (optional) - Default: `Button` <br>

```js
const expt = document.querySelector('.export');

const options = {
	targetNode: expt,
	id: 'exporto',
	data: "<h1>Sourav</h1>",
	fileType: 'text/html',
	fileExtension: '.html',
	className: 'export-btn',
	buttonText: 'Export'
} 
Exporto( options ).loaded();
```
![Exporto demo](https://github.com/AbmSourav/exporto/blob/dev/doc-resource/Exporto.gif)

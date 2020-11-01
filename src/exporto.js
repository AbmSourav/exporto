function Exporto( exports = {} ) {
	
	const { targetNode, id, data, fileType, fileExtension, className, buttonText } = exports;
	const modules = {};
	const privateModules = {}
	
	/**
	 * constructor mathod
	 */
	modules.loaded = () => {
		if (privateModules.errorCheck()) return console.error('targetNode or id is not defined...')
		// console.log(exports);

		targetNode.innerHTML = privateModules.createButton();
		privateModules.buttonEvent();
	}

	/**
	 * Check required inputs: targetNode, id.
	 * 
	 * return true
	 */
	privateModules.errorCheck = () => {
		if (targetNode == null || id == null) return true;
	}

	/**
	 * Put button in targetNode
	 * 
	 * return object
	 */
	privateModules.createButton = () => {
		const classNames = className == null ? '' : className;
		const btnText = buttonText == null ? 'Button' : buttonText;

		const buttonMarkup = '<button id="' + id + '" class="exporto ' + classNames + '">' + btnText + '</button>';
		return targetNode.innerHTML = buttonMarkup;
	}
	
	/**
	 * Add click Event on the button
	 */
	privateModules.buttonEvent = () => {
		const button = document.getElementById(id);

		button.addEventListener('click', privateModules.buttonEventHandler);
	}

	/**
	 * Button Event Handler
	 */
	privateModules.buttonEventHandler = (e) => {
		e.preventDefault();
		const oldDownloadNode = document.querySelector('.exporto-download');
		if (oldDownloadNode) {
			oldDownloadNode.parentNode.removeChild(oldDownloadNode);
		}

		privateModules.exportData();
	}
	
	privateModules.exportData = () => {
		const file_type = fileType == null ? 'text/plain' : fileType;
		const file_extension = fileExtension == null ? '.txt' : fileExtension;

		const blobObject = new Blob([data], { type: file_type });
		const url = URL.createObjectURL(blobObject);
		const downloadNode = document.createElement("a");

		const date = new Date();
		const options = { day: '2-digit', month: 'short', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' }
		const formatedDate = date.toLocaleDateString('en-BD', options);
		const dateString = JSON.stringify(formatedDate.replace(/[\s+\,\:\s+]/g, '' ));

		downloadNode.download = 'exporto-' + dateString + file_extension;
		downloadNode.setAttribute("href", url);
		downloadNode.classList.add('exporto-download');
		downloadNode.style.visibility = 'hidden';
		document.body.appendChild(downloadNode);
		downloadNode.click();
	} 

	return modules;
}

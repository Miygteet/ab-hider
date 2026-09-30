const inputElement = document.getElementById('url');

function transform() {
  const inputvalue = inputElement.value.trim()
  // Step 1: Open a new about:blank window
  let blankWindow = window.open('about:blank', '_blank');
  // Step 2: Inject an iframe with the target website URL
  blankWindow.document.write(`
    <iframe src="${inputvalue}" style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"></iframe>
  `);
}

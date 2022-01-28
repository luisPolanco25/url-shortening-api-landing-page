import { copyToClipboard } from './dom-elements-styles/copy-to-clipboard';
import { createLi } from './dom-elements-styles/create-li';
import { errorDisplay } from './dom-elements-styles/error-display';


export const fetchUrl = async(url, input, p, ul) => {

    const shrtCodeData = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    const shrtCodeResponse = await shrtCodeData.json();
    const {ok} = shrtCodeResponse;
    
    if (!ok) {

        const {error_code: error} = shrtCodeResponse;
        
        return (error === 1) ? errorDisplay(input, p, 'Please add a link') : errorDisplay(input, p, 'This is not a valid url');

    }

    const {result: {full_short_link: newUrl}} = shrtCodeResponse 
    
    const li = document.createElement('li');
    li.innerHTML = createLi(url, newUrl);
    const copyButton = li.children[1].children[1];
    const urlToCopy = copyButton.parentElement.children[0].innerText;
    copyButton.onclick = () => copyToClipboard(copyButton, urlToCopy);
    ul.append(li);
    input.value = '';

}
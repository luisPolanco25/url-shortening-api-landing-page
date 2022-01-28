const darkViolet = 'hsl(257, 27%, 26%)';

export const copyToClipboard = (button, copyText) => {

    button.innerText = 'Copied!';
    button.style.backgroundColor = darkViolet;

    return navigator.clipboard.writeText(copyText);

}
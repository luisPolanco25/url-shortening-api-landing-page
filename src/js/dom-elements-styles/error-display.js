const red = 'hsl(0, 87%, 67%)';

export const errorDisplay = (input, p, text) => {

    input.style.border = `3px solid ${red}`;
    p.style.display = 'block';
    p.innerText = text;

}
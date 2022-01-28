
export const createLi = (originalUrl, newUrl) => {

    return `
        <p class="entered-link"><a target="_blank" rel="noopener noreferrer" href="${originalUrl}">${originalUrl}</a></p>
        <div>
        <p class="given-link"><a target="_blank" rel="noopener noreferrer" href="${newUrl}">${newUrl}</a></p>
        <button class="buttons">Copy</button>
        </div>
    `;

}
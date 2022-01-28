
export const openMenu = (opened, popup) => {
    if (opened) {
        popup.style.display = 'flex'
    } else {
        popup.style.display = 'none'
    }
}
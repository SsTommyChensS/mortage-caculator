//Format number with Commas
export function formatNumber (number) {
    return number.toLocaleString('en-US');
};
//Move to section
export function moveToSection (section_id) {
    const anchor = document.querySelector(section_id);
    anchor.scrollIntoView({ behavior: 'smooth'})
}
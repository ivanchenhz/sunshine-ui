export default function clickOutside(node) {
    const handleClickOutside = event => {
        if (node && !node.contains(event.target) && !event.defaultPrevented) {
            node.dispatchEvent(
                new CustomEvent('clickOutside', node)
            )
        }
    }

    document.addEventListener('click', handleClickOutside, true)
    return {
        destroy() {
            document.removeEventListener('click', handleClickOutside, true)
        }
    }
}
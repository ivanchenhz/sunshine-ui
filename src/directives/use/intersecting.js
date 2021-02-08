export default function intersecting(node, threshold) {
    const observer = new IntersectionObserver(entries => {
        const {isIntersecting, intersectionRatio} = entries[0]
        console.log(entries[0])
        node.dispatchEvent(
            new CustomEvent('intersecting', {
                detail: { isIntersecting, intersectionRatio }
            })
        )
    }, {
        threshold
    })

    observer.observe(node)
    return {
        destroy() {
            observer.unobserve(node)
        }
    }
}
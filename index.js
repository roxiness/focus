let elements = []

export function focus(element) {
    // Tell the first element to wait for all synchronous elements before calling waitAndFocus
    if (!elements.length)
        setTimeout(waitAndFocus)
    elements.push(element)
}

function waitAndFocus() {
    let elementsByProximityToRoot = elements.sort((a, b) => getAncestors(a) - getAncestors(b))
    const element = elementsByProximityToRoot[0]

    element.setAttribute('tabindex', 0)
    element.focus()
    elements = []
}

function getAncestors(elem) {
    return document.evaluate('ancestor::*', elem, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null).snapshotLength
}
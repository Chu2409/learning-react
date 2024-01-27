import { BUTTON, EVENTS } from './consts.js'

export const navigate = (href) => {
  window.history.pushState({}, '', href)
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

export const Link = ({ target, to, ...props }) => {
  const handleClick = (e) => {
    const isMainEvent = e.button === BUTTON.PRIMARY
    const isModifiedEvent = e.metaKey || e.altKey || e.ctrlKey || e.shiftKey
    const isManageable = target === undefined || target === '_self'

    if (isMainEvent && !isModifiedEvent && isManageable) {
      e.preventDefault()
      navigate(to)
    }
  }

  return <a onClick={handleClick} href={to} target={target} {...props} />
}

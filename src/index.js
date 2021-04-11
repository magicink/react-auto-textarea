import React from 'react'

const listen = (el, event, handler) =>
  el.addEventListener(event, handler, false)
const mute = (el, event, handler) => el.removeEventListener(event, handler)
const events = ['change', 'cut', 'drop', 'focus', 'paste', 'keydown']

export const AutoTextArea = props => {
  const { maxheight, minheight, width } = props
  const textArea = React.useRef()
  const timer = React.useRef(null)

  const resize = () => {
    const el = textArea.current
    // if it has a max height
    let nextHeight = el.scrollHeight
    if (maxheight) {
      // if the scroll height is less max height
      if (el.scrollHeight < maxheight) {
        nextHeight = el.scrollHeight
      } else {
        nextHeight = maxheight
      }
    }
    if (minheight) {
      if (nextHeight < minheight) {
        nextHeight = minheight
      }
    }
    el.style.height = `${nextHeight}px`
  }

  const delayResize = () => {
    timer.current = setTimeout(resize, 0)
  }

  React.useEffect(() => {
    if (textArea.current) {
      textArea.current.style.width = width ?? '100%'
      resize()
      events.forEach(s => listen(textArea.current, s, delayResize))
    }
    return () => {
      if (textArea.current) {
        events.forEach(s => mute(textArea.current, s, delayResize))
      }
    }
  }, [textArea?.current])

  /**
   * Clean up
   */
  React.useEffect(() => {
    return () => {
      textArea.current = null
      timer.current = null
    }
  }, [])

  return (
    <textarea data-testid='react-auto-textarea' ref={textArea} {...props} />
  )
}
AutoTextArea.defaultProps = {
  maxheight: 0
}
AutoTextArea.displayName = 'AutoTextArea'

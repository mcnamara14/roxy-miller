import React, { useState, useRef, useMemo, Fragment } from "react"
import { useScrollPosition } from "src/utils/useScrollPosition"

export default () => {
  const [hideOnScroll, setHideOnScroll] = useState(true)
  const rendersCount = useRef(0)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y
      if (isShow !== hideOnScroll) setHideOnScroll(isShow)
    },
    [hideOnScroll],
    null,
    false,
    300
  )

  return useMemo(() => <b>RENDER COUNT: {++rendersCount.current}</b>, [
    hideOnScroll,
  ])
}

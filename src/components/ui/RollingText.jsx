'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Rolling Text component with static min-width based on the longest word:
 * - Prevents any width twitch/junk when switching words.
 * - Outgoing word: translateY(-100%) and opacity -> 0
 * - Incoming word: translateY(100% -> 0%) and opacity 0 -> 1
 */
export function RollingText({
  words = ['Founders', 'Startups', 'Agencies', 'Bootstraps'],
  interval = 500,
  className = 'grey-clr',
}) {
  const [index, setIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const timerRef = useRef(null)

  // Find longest word to lock fixed container width and eliminate any width jitter
  const longestWord = words.reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    words[0] || ''
  )

  useEffect(() => {
    if (words.length <= 1) return

    timerRef.current = setInterval(() => {
      setIndex((current) => {
        setPrevIndex(current)
        return (current + 1) % words.length
      })
      setIsAnimating(true)
    }, interval)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [words.length, interval])

  useEffect(() => {
    if (isAnimating) {
      const timeout = setTimeout(() => {
        setIsAnimating(false)
      }, 650)
      return () => clearTimeout(timeout)
    }
  }, [isAnimating])

  const currentWord = words[index]
  const prevWord = words[prevIndex]

  return (
    <span className={`rico-roll-box ${className}`}>
      {/* Invisible ghost of longest word reserves fixed max width to eliminate width twitch */}
      <span className="rico-roll-ghost" aria-hidden="true">
        {longestWord}
      </span>

      <span className="rico-roll-stage">
        {/* Outgoing Word (opacity 1 -> 0, translateY 0 -> -100%) */}
        <span className={`rico-roll-word ${isAnimating ? 'is-leaving' : 'is-active'}`}>
          {isAnimating ? prevWord : currentWord}
        </span>

        {/* Incoming Word (opacity 0 -> 1, translateY 100% -> 0) */}
        {isAnimating && (
          <span className="rico-roll-word is-entering">
            {currentWord}
          </span>
        )}
      </span>
    </span>
  )
}

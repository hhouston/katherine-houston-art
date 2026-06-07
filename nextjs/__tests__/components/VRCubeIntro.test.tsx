const mockPush = jest.fn()

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: mockPush }),
}))

import '@testing-library/jest-dom'
import React from 'react'
import { render, screen, act } from '@testing-library/react'
import { VRCubeOverlay, useVRCubeIntro } from '@/components/concept-1/VRCubeIntro'

function HookHarness() {
  const { overlayRef, trigger } = useVRCubeIntro()
  return (
    <>
      <VRCubeOverlay overlayRef={overlayRef} />
      <button onClick={trigger}>Trigger</button>
    </>
  )
}

beforeEach(() => {
  jest.clearAllMocks()
  jest.useFakeTimers()
  window.matchMedia = jest.fn().mockReturnValue({ matches: false })
})

afterEach(() => {
  jest.useRealTimers()
})

describe('VRCubeOverlay', () => {
  test('renders the vr-intro div', () => {
    const ref = { current: null } as React.RefObject<HTMLDivElement>
    render(<VRCubeOverlay overlayRef={ref} />)
    expect(document.getElementById('vr-intro')).toBeInTheDocument()
  })

  test('has aria-hidden', () => {
    const ref = { current: null } as React.RefObject<HTMLDivElement>
    render(<VRCubeOverlay overlayRef={ref} />)
    expect(document.getElementById('vr-intro')).toHaveAttribute('aria-hidden', 'true')
  })
})

describe('useVRCubeIntro trigger', () => {
  test('adds vri-active class to overlay on trigger', () => {
    render(<HookHarness />)
    const overlay = document.getElementById('vr-intro')!

    act(() => {
      screen.getByRole('button').click()
    })

    expect(overlay.classList.contains('vri-active')).toBe(true)
  })

  test('navigates to cube-series inquire page after 3600ms', () => {
    render(<HookHarness />)

    act(() => {
      screen.getByRole('button').click()
      jest.advanceTimersByTime(3600)
    })

    expect(mockPush).toHaveBeenCalledWith('/concept-1/cube-series/inquire')
  })

  test('skips animation and navigates immediately when prefers-reduced-motion', () => {
    window.matchMedia = jest.fn().mockReturnValue({ matches: true })
    render(<HookHarness />)

    act(() => {
      screen.getByRole('button').click()
    })

    expect(mockPush).toHaveBeenCalledWith('/concept-1/cube-series/inquire')
    const overlay = document.getElementById('vr-intro')!
    expect(overlay.classList.contains('vri-active')).toBe(false)
  })

  test('does not re-trigger if already active', () => {
    render(<HookHarness />)
    const btn = screen.getByRole('button')

    act(() => { btn.click() })
    act(() => { btn.click() })

    expect(mockPush).not.toHaveBeenCalled()
    expect(document.querySelectorAll('.vri-cube').length).toBeGreaterThan(0)
  })
})

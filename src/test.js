import { act, render, fireEvent, screen } from '@testing-library/react'
import { AutoTextArea } from './index'
import React from 'react'
describe('<AutoTextArea />', () => {
  it('renders', () => {
    const handleBlur = jest.fn()
    const handleChange = jest.fn()
    render(
      <AutoTextArea
        id={'test-component'}
        maxheight={500}
        minheight={100}
        onChange={handleChange}
        onBlur={handleBlur}
        value={'test text'}
        width={'50px'}
      />
    )
    const el = screen.getByTestId('react-auto-textarea')
    expect(el).toBeInTheDocument()
    const textArea = document.getElementById('test-component')
    expect(textArea.getAttribute('style')).toEqual(
      'width: 50px; height: 100px;'
    )
    act(() => {
      fireEvent.change(el, {
        target: {
          value: 'new value'
        }
      })
    })
    expect(handleChange).toHaveBeenCalled()
    act(() => {
      fireEvent.blur(el)
    })
    expect(handleBlur).toHaveBeenCalled()
  })
})

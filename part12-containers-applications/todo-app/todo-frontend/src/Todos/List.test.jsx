import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import List from './List'

test('renders content', () => {
    const todos = [
        {
            text: 'testing this component',
            done: false
        },
        {
            text: 'testing inside a container',
            done: true
        }
    ]
    const deleteFn = vi.fn()
    const completeFn = vi.fn()

    render(<List todos={todos} deleteTodo={deleteFn} completeTodo={completeFn} />)

    const elementOne = screen.getByText('testing this component')
    const elementTwo = screen.getByText('testing inside a container')

    expect(elementOne).toBeDefined()
    expect(elementTwo).toBeDefined()
})
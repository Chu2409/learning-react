import { expect, test } from 'vitest'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test('My App works as expected', async () => {
  const user = userEvent.setup()
  const app = render(<App />)

  const textAreaFrom = app.getByPlaceholderText('Introducir texto')

  await user.type(textAreaFrom, 'Hola Mundo')
  const result = await app.findByDisplayValue(/Hello world/i, {}, { timeout: 5000 })

  expect(result).toBeTruthy()
})

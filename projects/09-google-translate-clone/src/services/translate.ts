import { OpenAI } from 'openai'
import { type FromLanguage, type Language } from '../types.d'
import { SUPPORTED_LANGUAGES } from '../const'
import { type ChatCompletionMessageParam } from 'openai/resources/index.mjs'

const apiKey = import.meta.env.VITE_OPENAI_API_KEY

const opeanai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true })

interface Props {
  fromLanguage: FromLanguage
  toLanguage: Language
  text: string
}

export const translate = async ({ fromLanguage, toLanguage, text }: Props) => {
  if (fromLanguage === toLanguage) return text

  const messages: ChatCompletionMessageParam[] = [
    {
      role: 'system',
      content: 'You are a AI that translates text. You receive a text from the user. Do not answer, just translate the text. The original language is surrounded by `{{` and `}}`. You can also receive {{auto}} which means that you have to detect the language. The language you translate to is surrounded by `[[` and `]]`.'
    },
    {
      role: 'user',
      content: 'Hola Mundo {{Español}} [[English]]'
    },
    {
      role: 'system',
      content: 'Hello World'
    }
    // {
    //   role: 'user',
    //   content: 'How are you? {{auto}} [[Deutsch]]'
    // },
    // {
    //   role: 'system',
    //   content: 'Wie geht es dir?'
    // },
    // {
    //   role: 'user',
    //   content: 'Bon dia, com estas? {{auto}} [[Español]]'
    // },
    // {
    //   role: 'system',
    //   content: 'Buenos días, ¿cómo estás?'
    // }
  ]

  const fromCode = fromLanguage === 'auto' ? 'auto' : SUPPORTED_LANGUAGES[fromLanguage]
  const toCode = SUPPORTED_LANGUAGES[toLanguage]

  console.log('Hola')

  const completion = await opeanai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      ...messages,
      {
        role: 'user',
        content: `${text} {{${fromCode}}} [[${toCode}]]`
      }
    ]
  })

  console.log(completion)

  return completion.choices[0]?.message?.content
}

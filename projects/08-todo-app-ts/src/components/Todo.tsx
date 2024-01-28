import { type TodoId, type Todo as TodoType } from '../types'

interface Props extends TodoType {
  onComplete: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
  onRemove: ({ id }: TodoId) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onComplete, onRemove }) => {
  const handleChangeCheckBox = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onComplete({
      id,
      completed: e.target.checked
    })
  }

  return (
    <div className="view">
      <input
        className="toggle"
        checked={completed}
        type="checkbox"
        onChange={handleChangeCheckBox}
      />

      <label >{title}</label>

      <button
        className='destroy'
        onClick={() => {
          onRemove({ id })
        }}
      />
    </div>
  )
}

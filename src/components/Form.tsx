import React, {useState} from 'react'

interface ITodoForm{
  onAdd(title:string): void
}

const Form: React.FC<ITodoForm> = ({onAdd}) => {
  const [title, setTitle] = useState<string>('');

  const handlerInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }

  const handleKeydownListener = (event: React.KeyboardEvent) => {
    if(event.key === 'Enter'){
      onAdd(title);
      setTitle('');
    }
  }

  return (
    <div className='inpit-field mt'>
        <label htmlFor="title" className='active'>Введите название...</label>
        <input type="text" id='title' placeholder='Введите название...' value={title} onChange={handlerInputChange} onKeyDown={handleKeydownListener} />
    </div>
  )
}

export default Form
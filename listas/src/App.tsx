import { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState<string[]>([])

  const [editTask, setEditTask] = useState({
    enabled: false,
    task: ''
  });


  const [teste, setTeste] = useState(false);

  useEffect(() => {
    const tarefasSalvas = localStorage.getItem("@cursoreact")
    if (tarefasSalvas) {
      setTasks(JSON.parse(tarefasSalvas))
    }
  }, [])

  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return
    }
    localStorage.setItem("@cursoreact", JSON.stringify(tasks))
  }, [tasks])

  /**useRef */
  const inputRef = useRef<HTMLInputElement>(null);

  const handleRegister = useCallback(() => {
    if (!input) {
      alert('Informe a sua nova tarefa')
      return;
    }

    if (editTask.enabled) {
      handleSaveEdit();
      return;
    }

    setTasks(tarefas => [...tarefas, input])
    setInput("")
    // localStorage.setItem("@cursoreact", JSON.stringify([...tasks, input]))

  }, [input, tasks])

  function handleSaveEdit() {
    const findIndexTask = tasks.findIndex(task => task === editTask.task)
    const allTasks = [...tasks]

    allTasks[findIndexTask] = input
    setTasks(allTasks)

    setEditTask({
      enabled: false,
      task: ''
    })

    setInput('')
    //  localStorage.setItem("@cursoreact", JSON.stringify(allTasks))
  }

  function handleDelete(item: string) {
    const removeTask = tasks.filter(task => task !== item);
    setTasks(removeTask)
    // localStorage.setItem("@cursoreact", JSON.stringify(removeTask))
  }

  function handleEdit(item: string) {
    setInput(item)
    setEditTask({
      enabled: true,
      task: item
    })

    inputRef.current?.focus();
  }

  const totalTarefas = useMemo(() => {
    return tasks.length
  }, [tasks])

  return (
    <div>
      <h1>Lista - Formulários</h1>
      <input type="text" placeholder='Informa a tarefa'
        value={input} onChange={(e) => setInput(e.target.value)} ref={inputRef} />

      <button onClick={handleRegister}>
        {editTask.enabled ? "Atualizar" : "Adicionar"}
      </button>
      <hr />

      <strong>Vicê tem {totalTarefas} tarefas!</strong>

      <hr />
      {tasks.map((item, index) => (
        <section key={item} className='box-tasks'>
          <span>{item}</span>
          <button onClick={() => handleEdit(item)}>Editar</button>
          <button onClick={() => handleDelete(item)}>Excluir</button>
        </section>
      ))}
    </div>
  )
}

export default App

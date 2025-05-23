import Button from './Button';

export default function Sidebar({
  onStartAddProject,
  projects,
  onSelect,
  selectedProjectId,
}) {
  return (
    <aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl'>
      <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className='mt-8'>
        {projects.map((project) => {
          let cssClases =
            'w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800';

          if (project.id === selectedProjectId) {
            cssClases += ' bg-stone-800 text-stone-200';
          } else {
            cssClases += ' text-stone-400';
          }
          return (
            <li
              key={project.id}
              className='my-4 text-stone-300 hover:text-stone-50'
            >
              <button
                onClick={() => onSelect(project.id)}
                className={cssClases}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

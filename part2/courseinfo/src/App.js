import logo from './logo.svg';
import './App.css';
import Course from './components/Course';

function App() {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    },
    {
      name: 'Testing.js',
      id: 3,
      parts: [
        {
          name: 'Is this even working',
          exercises: 25,
          id: 1
        },
        {
          name: 'AAA',
          exercises: 5,
          id: 2
        }
      ]
    }
  ]
  
  return (
  <div>
    <Course courses={courses} />
  </div>
  );
}

export default App;

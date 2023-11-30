const Part = ({part})=>{
  return (
    <>
    <p>{part.name} {part.exercises}</p>
    </>
  )
}
const Course = (props)=>{
  var total = 0;
  const course = props.course
  console.log(course)
  return (
    <>
      <h1>{course.name}</h1>
      {course.parts.forEach((e)=>{
        total += e.exercises;
        return <Part part={e}/>
      })}
      <h3>Total of exercises for this course is {total}</h3>
    </>
  )
}
const Courses = ({courses})=>{
  return (
    <>      
      {courses.forEach((e)=>{
        <Course key={e.id} course={e}/>
      })}
    </>
  )
}
const App = () => {
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
    }
  ]

  return <Courses courses={courses} />
}

export default App

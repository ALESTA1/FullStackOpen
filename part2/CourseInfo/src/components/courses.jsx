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
        {course.parts.map((e,i)=>{
          total += e.exercises;
          return <Part key={i} part={e}/>
        })}
        <h3>Total of exercises for this course is {total}</h3>
      </>
    )
  }
  const Courses = ({courses})=>{
    return (
      <>      
        {courses.map((e)=>{
          console.log(e);
          return <Course key={e.id} course={e}/>
        })}
      </>
    )
  }

  export default  Courses;
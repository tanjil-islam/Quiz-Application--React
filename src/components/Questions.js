import classes from '../styles/Question.module.css'
import Answers from './Answers'

export default function Questions({answers=[]}) {
  return answers.map((answer, index) => (
    <div key={index} className={classes.question}>
      <div className={classes.qtitle}>
        <span className='material-icons-outlined'> help_outline </span>
        {answer.question}
      </div>
      <Answers input ={false} options={answer.options} />
    </div>
  ))
}


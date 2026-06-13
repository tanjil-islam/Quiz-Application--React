import classes from '../styles/Button.module.css'

export default function Button({ className, children, disabled, type }) {
  return (
    <button
      className={` ${classes.button} ${className}`}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  )
}

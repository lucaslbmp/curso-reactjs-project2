import P from 'prop-types'


export const Button = ({children, onButtonClicked, disabled=false}) => {
  return(
    <button onClick={onButtonClicked} disabled={disabled}>{children}</button>
  )
}

Button.propTypes = {
  children: P.node.isRequired,
  onButtonClicked: P.func.isRequired,
  disabled: P.bool
}

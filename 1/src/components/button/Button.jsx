import './button.css';
function Button(props) {
  return <button style={{ background: props.color }}>{props.status}</button>;
}

export default Button;

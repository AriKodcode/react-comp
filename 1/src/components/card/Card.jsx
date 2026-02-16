import Button from '../button/Button';
import './card.css'
function Card(props) {
  const { src, name, description, status, color } = props;
  return (
    <div className="card">
      <img src={src} alt="avatar" />
      <h3>{name}</h3>
      <p>{description}</p>
      <button></button>
      <Button status={status} color={color} />
    </div>
  );
}

export default Card;

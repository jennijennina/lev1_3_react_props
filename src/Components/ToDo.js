// Function hier mit retun
const toDo = (props) => {
  return (
    <li>
      <img src={props.toDo.iconLeft} alt="" />
      <p> {props.toDo.name} </p>
      <img src={props.toDo.iconRight} alt="" />
    </li>
  );
};

export default toDo;

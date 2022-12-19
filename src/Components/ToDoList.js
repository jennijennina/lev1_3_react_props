import ToDo from "./ToDo";
// Objekt mit Array

const list = [
  {
    name: "Hit the gym",
    iconLeft: "/img/check.png",
    iconRight: "/img/gym.png",
  },
  { name: "Pay bills", iconLeft: "/img/check.png", iconRight: "/img/bill.png" },
  {
    name: "Meet George",
    iconLeft: "/img/doing.png",
    iconRight: "/img/dance.png",
  },
  { name: "Buy eggs", iconLeft: "/img/doing.png", iconRight: "/img/eat.png" },
  { name: "Read a book", iconLeft: "/img/no.png", iconRight: "/img/book.png" },
  {
    name: "Organize office",
    iconLeft: "/img/no.png",
    iconRight: "/img/organize.png",
  },
];

const toDoList = () => {
  return (
    <ul>
      <ToDo toDo={list[0]} />
      <ToDo toDo={list[1]} />
      <ToDo toDo={list[2]} />
      <ToDo toDo={list[3]} />
      <ToDo toDo={list[4]} />
      <ToDo toDo={list[5]} />
    </ul>
  );
};

export default toDoList;

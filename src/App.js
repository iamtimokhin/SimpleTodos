import React, { useEffect } from "react";
import Header from "./components/UI/Header/Header";
import List from "./components/UI/List/List";
import useFetch from "./hooks/useFetch";
import Modal from "./components/UI/Modal/Modal";
import useToggle from ".//hooks/useToggle";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const [adding, setAdding] = React.useState(false);
  const [favourites, setFavourites] = React.useState([]);
  const [openModal, setOpenModal] = useToggle(false);
  const [search, setSearch] = React.useState("");
  const { response, isLoading, setResponse } = useFetch(`
  https://jsonplaceholder.typicode.com/posts`);
  console.log(response);

  const filteredTodos = response.filter((val) =>
    val.title.toLowerCase().includes(search.toLowerCase())
  );

  const addNote = () => {
    const newNote = {
      title: title,
      body: body,
      id: uuidv4(),
    };
    if (newNote.title === "" || newNote.body === "") {
      return alert("Поля не могут быть пустыми");
    } else {
      setAdding(true);
      setTimeout(() => {
        setResponse((prev) => [newNote, ...prev]);
        setAdding(false);
        setTitle("");
        setBody("");
      }, 2000);
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addNote(title, body);
  };
  return (
    <div className="App">
      <Header
        search={search}
        setSearch={setSearch}
        adding={adding}
        setAdding={setAdding}
        handleOnSubmit={handleOnSubmit}
        title={title}
        setTitle={setTitle}
        body={body}
        setBody={setBody}
        favourites={favourites.length}
        data={response.length}
      />
      <List
        isLoading={isLoading}
        data={filteredTodos}
        setResponse={setResponse}
        favourites={favourites}
        setFavourites={setFavourites}
      />
    </div>
  );
};

export default App;

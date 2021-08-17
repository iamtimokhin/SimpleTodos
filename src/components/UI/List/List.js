import React, { useState } from "react";
import Loader from "..//Loader/Loader";
import Modal from "../../../components/UI/Modal/Modal";
import useToggle from "../../../hooks/useToggle";

const List = ({ data, isLoading, setResponse, favourites, setFavourites }) => {
  const [openModal, setOpenModal] = useToggle(false);
  const [load, setLoad] = useState(false);
  const [removing, setRemoving] = useState(false);
  const [element, setElement] = React.useState(3);
  const slice = data.slice(0, element);
  console.log(favourites);

  const addToFav = (note) => {
    setTimeout(() => {
      setFavourites([...favourites, note]);
    }, 2000);
  };

  const remove = (id) => {
    setRemoving(true);
    setTimeout(() => {
      setResponse(data.filter((val) => val.id !== id));
      setRemoving(false);
      setOpenModal(false);
    }, 2000);
  };
  const loadMore = () => {
    setLoad(true);
    setTimeout(() => {
      setElement(element + element);
      setLoad(false);
    }, 1000);
  };

  if (isLoading) {
    return <Loader />;
  }
  if (data.length === 0) {
    return (
      <h1
        style={{
          marginTop: "220px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Заметок не найдено!
      </h1>
    );
  } else {
    return (
      <>
        <section className="list list--wrapper">
          {slice.map((val) => (
            <div key={val.id} className="card list__card">
              <p className="list__title">Название заметки: {val.title}</p>
              <p className="list__body">Содержание заметки:{val.body}</p>
              <button className="list__remove" onClick={setOpenModal}>
                Удалить
              </button>
              <button className="list__add" onClick={() => addToFav(val)}>
                Добававить в избранное
              </button>
              {openModal && (
                <Modal>
                  <p>Вы действительно хотите удалить заметку?</p>
                  {removing ? (
                    <button className="list__modalWait">Удаление...</button>
                  ) : (
                    <>
                      <button
                        className="list__modalRemove"
                        onClick={() => {
                          remove(val.id);
                        }}
                      >
                        Удалить
                      </button>
                      <button
                        className="list__modalCancel"
                        onClick={setOpenModal}
                      >
                        Оменить
                      </button>
                    </>
                  )}
                </Modal>
              )}
            </div>
          ))}
          {element < data.length && (
            <button className="list__loadMore" onClick={() => loadMore()}>
              {load ? <span>Loading...</span> : <span>Load More</span>}
            </button>
          )}
        </section>
      </>
    );
  }
};

export default List;

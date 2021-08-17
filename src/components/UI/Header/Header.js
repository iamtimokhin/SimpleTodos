import React from "react";
import Modal from "../Modal/Modal";
import Form from "../Form/Form";
import useToggle from "../../../hooks/useToggle";

const Header = ({
  data,
  favourites,
  title,
  body,
  setTitle,
  setBody,
  handleOnSubmit,
  adding,
  setAdding,
  search,
  setSearch,
}) => {
  const [isVisible, modalVisible] = useToggle(false);

  return (
    <>
      <header className="header header--wrapper">
        <nav className="header__menu">
          <ul className="header__list">
            <li className="header__link">
              <a href="/" className="header__favorites">
                Все заметки ({data})
              </a>
            </li>
            <li className="header__link">
              <a href="/" className="header__favorites">
                Избранное ({favourites})
              </a>
            </li>
          </ul>
        </nav>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="header__search"
          placeholder="Поиск заметок..."
        />
        <button className="header__button" onClick={modalVisible}>
          Добавить заметку
        </button>
        {isVisible && (
          <Modal>
            <Form
              adding={adding}
              setAdding={setAdding}
              modalVisible={modalVisible}
              handleOnSubmit={handleOnSubmit}
              title={title}
              setTitle={setTitle}
              body={body}
              setBody={setBody}
            />
          </Modal>
        )}
      </header>
    </>
  );
};

export default Header;

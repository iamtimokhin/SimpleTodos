import React from "react";
function Form({
  modalVisible,
  title,
  body,
  setTitle,
  setBody,
  handleOnSubmit,
  adding,
  setAdding,
}) {
  return (
    <>
      <section className="form form__wrapper">
        <h3 className="form__title">Форма добавления Todos</h3>
        {/* <label className="form__label">Название заметки</label> */}
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="Введите название заметки"
          className="form__todos"
        />
        {/* <label className="form__label">Тело заметки</label> */}
        <textarea
          onChange={(e) => setBody(e.target.value)}
          value={body}
          rows={10}
          placeholder="Введите тело заметки"
          className="form__body"
        />
        <div className="btn form__btn">
          <button className="btn__add" onClick={handleOnSubmit}>
            Добавить
          </button>
          <button className="btn__cancel" onClick={modalVisible}>
            Отменить
          </button>
        </div>
      </section>
    </>
  );
}

export default Form;

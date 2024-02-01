import { useState } from "react";

function App() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="wrap">
        <button className="modal-btn" onClick={toggleModal}>
          SHOW MODAL
        </button>

        {modal && (
          <>
            <div className="modal" id="modal">
              {/*  modal header  */}
              <div className="modal-header">
                <h3>I love Mercades Benz..💖 </h3>
                <button className="btn close-btn" id="close-btn">
                  <i className="fas fa-close" onClick={toggleModal}></i>
                </button>
              </div>
              {/* modal body */}
              <div className="modal-body">
                <h2 className="modal-title">Modal Title</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero ad deleniti obcaecati, eum corrupti dolores hic
                  asperiores accusantium repudiandae necessitatibus delectus
                  optio ut at. Vero quasi ratione aliquid sapiente provident
                  consequuntur nihil tempora nobis nulla sequi, quia commodi
                  eum, at expedita vel asperiores similique eligendi!
                </p>
              </div>
            </div>
            <div className="overlay" onClick={toggleModal}></div>
          </>
        )}
      </div>
    </>
  );
}

export default App;

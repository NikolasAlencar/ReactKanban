import { useContext, useEffect } from "react";
import Board from "../../components/Board/Board";
import { UserContext } from "../../contexts/UserContext";
import LoadingSpinner from "../../components/Loading/Loading";
import GenericError from "../../components/GenericError/GenericError";
import Modal from "../../components/Modal/Modal";
import axios from "axios";
import { InitialData } from "../../models/IInitialData";
import { API_URL } from "../../environments/environment";

const Home = () => {
  const { loading, error, dataBoard, setLoading, setDataBoard, setError } =
    useContext(UserContext);

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios
      .get<InitialData>(`${API_URL}data`)
      .then((initialData) => setDataBoard(initialData.data))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [setDataBoard, setError, setLoading]);

  // Caso quisesse usar o useFetch
  //
  // const { data: initialData } = useFetch({
  //   url: `${API_URL}data`,
  //   method: "get",
  // });

  // useEffect(() => {
  //   if (initialData) {
  //     setDataBoard(initialData);
  //   }
  // }, [initialData, setDataBoard]);

  return (
    <>
      {error && (
        <Modal>
          <GenericError error={error} />
        </Modal>
      )}

      {loading && <LoadingSpinner />}

      {dataBoard && <Board initialData={dataBoard} setDataBoard={setDataBoard} />}
    </>
  );
};

export default Home;

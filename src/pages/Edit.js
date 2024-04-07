import { useSearchParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const id = searchParams.get("id");
  const mode = searchParams.get("mode");
  const who = searchParams.get("who");

  return (
    <div>
      <h1>Edit</h1>
      <p>
        이곳은{who}의 {id}번 일기 수정 페이지 입니다.({mode}모드)
      </p>
      <button
        onClick={() =>
          setSearchParams({ who: "winterlood", id: 10, mode: "dark" })
        }
      >
        QS바꾸기
      </button>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        HOME으로 가기
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
    </div>
  );
};

export default Edit;

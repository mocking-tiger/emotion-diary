import { useEffect } from "react";
import DiaryEditor from "../components/DiaryEditor";

const New = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `感情日記帳・新たな日記`;
  }, []);

  return (
    <div>
      <DiaryEditor />
    </div>
  );
};

export default New;

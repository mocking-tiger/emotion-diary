import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DiaryStateContext } from "../App";

import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";

import { getStringDate } from "../utils/date";
import { emotionList } from "../utils/emotion";

const Diary = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const diaryList = useContext(DiaryStateContext);
  const [data, SetData] = useState();

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `感情日記帳・${id}番`;
  }, [id]);

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );
      if (targetDiary) {
        SetData(targetDiary);
      } else {
        alert("日記が無いです。");
        navigate("/", { replace: true });
      }
    }
  }, [id, diaryList, navigate]);

  if (!data) {
    return <div className="DiaryPage">ローディング。。。</div>;
  } else {
    const curEmotionData = emotionList.find(
      (it) => parseInt(it.emotion_id) === parseInt(data.emotion)
    );

    return (
      <div className="DiaryPage">
        <MyHeader
          headText={`${getStringDate(new Date(data.date))}の記録`}
          leftChild={<MyButton text={"<後ろに"} onClick={() => navigate(-1)} />}
          rightChild={
            <MyButton
              text={"修正"}
              onClick={() => navigate(`/edit/${data.id}`)}
            />
          }
        />
        <article>
          <section>
            <h4>今日の感情</h4>
            <div
              className={[
                "diary_img_wrapper",
                `diary_img_wrapper_${data.emotion}`,
              ].join(" ")}
            >
              <img src={curEmotionData.emotion_img} alt="emotion-icon" />
              <div className="emotion_description">
                {curEmotionData.emotion_description}
              </div>
            </div>
          </section>
          <section>
            <h4>今日の日記</h4>
            <div className="diary_content_wrapper">
              <p>{data.content}</p>
            </div>
          </section>
        </article>
      </div>
    );
  }
};

export default Diary;

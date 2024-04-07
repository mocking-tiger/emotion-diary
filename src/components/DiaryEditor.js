import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MyButton from "./MyButton";
import MyHeader from "./MyHeader";
import EmotionItem from "./EmotionItem";

const emotionList = [
  {
    emotion_id: 1,
    emotion_img: `/assets/emotion1.png`,
    emotion_description: "超ハッピー",
  },
  {
    emotion_id: 2,
    emotion_img: `/assets/emotion2.png`,
    emotion_description: "ハッピー",
  },
  {
    emotion_id: 3,
    emotion_img: `/assets/emotion3.png`,
    emotion_description: "まあまあ",
  },
  {
    emotion_id: 4,
    emotion_img: `/assets/emotion4.png`,
    emotion_description: "悪い",
  },
  {
    emotion_id: 5,
    emotion_img: `/assets/emotion5.png`,
    emotion_description: "最低",
  },
];

const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
};

const DiaryEditor = () => {
  const navigate = useNavigate();
  const [emotion, setEmotion] = useState(3);
  const [date, setDate] = useState(getStringDate(new Date()));
  const handleClickEmote = (emotion) => {
    setEmotion(emotion);
  };
  return (
    <div className="DiaryEditor">
      <MyHeader
        headText={"新たな日記"}
        leftChild={
          <MyButton
            text={"<後ろに"}
            onClick={() => {
              navigate(-1);
            }}
          />
        }
      />
      <div>
        <section>
          <h4>今日は何日ですか？</h4>
          <div className="input_box">
            <input
              className="input_date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
            />
          </div>
        </section>
        <section>
          <h4>今日の感情</h4>
          <div className="input_box emotion_list_wrapper">
            {emotionList.map((it) => (
              <EmotionItem
                key={it.emotion_id}
                {...it}
                onClick={handleClickEmote}
                isSelected={it.emotion_id === emotion}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DiaryEditor;

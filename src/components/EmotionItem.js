const EmotionItem = ({
  emotion_id,
  emotion_img,
  emotion_description,
  onClick,
  isSelected,
}) => {
  return (
    <div
      className={[
        "EmotionItem",
        isSelected
          ? `EmotionItem_on_${emotion_img.slice(15, 16)}`
          : `EmotionItem_off`,
      ].join(" ")}
      onClick={() => onClick(emotion_id)}
    >
      <img src={emotion_img} alt="emotion-icon" />
      <span>{emotion_description}</span>
    </div>
  );
};

export default EmotionItem;

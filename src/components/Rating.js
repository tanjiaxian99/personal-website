const Rating = () => {
  const ratings = [
    "Learnt the foundamentals with little to no application",
    "Learnt more advanced concepts with limited application",
    "Seen some form of application",
    "Built one or two small projects OR seen quite extensive use",
    "Built several small projects OR one big project",
  ];
  return (
    <div className="flex-spacebetween">
      <div className="logos"></div>
      <p>Rating</p>
    </div>
  );
};

export default Rating;

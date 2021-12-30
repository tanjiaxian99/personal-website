const ClickableLogo = ({ logo }) => {
  const { link, img, name } = logo;
  return (
    <span className="clickable-logo">
      <a href={link} target="_blank" rel="noreferrer">
        <img className="logo" src={img} alt={name} aria-label={name} />
      </a>
    </span>
  );
};

export default ClickableLogo;

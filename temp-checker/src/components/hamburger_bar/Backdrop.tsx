interface BackDropType {
  openClass: string;
}

const BackDrop: React.FC<BackDropType> = ({ openClass }) => {
  return (
    <div id="nav" className={`nav nav--${openClass}`}>
      <div className="backdrop"></div>
    </div>
  );
};

export default BackDrop;

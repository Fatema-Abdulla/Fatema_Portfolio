import "../App.css";

const particles = Array.from({ length: 100 });

const Balls = () => {
  return (
    <div className="star-container">
      {particles.map((_, i) => {
        const size = Math.random() * 6 + 2;
        const left = Math.random() * 100;
        const top = Math.random() * 100; // ⭐ مهم جدًا
        const duration = 15 + Math.random() * 20;
        const delay = Math.random() * 10;

        return (
          <div
            key={i}
            className="circle-container"
            style={{
              left: `${left}vw`,
              top: `${top}vh`,
              width: `${size}px`,
              height: `${size}px`,
              animationDuration: `${duration}s`,
              animationDelay: `-${delay}s`,
            }}
          >
            <div className="circle" />
          </div>
        );
      })}
    </div>
  );
};

export default Balls;

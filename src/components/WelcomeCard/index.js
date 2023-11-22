import { Link } from "react-router-dom";
import "./style.css";

const WelcomeCard = () => {
  return (
    <div>
      <h1>Selamat datang di Devcode!</h1>
      <h2>
        Silahkan klik tombol di bawah ini untuk melihat hasil akhir dari
        perubahan yang kamu lakukan.
      </h2>
      <div data-cy="router-button">
        <Link to={`/hello`} className="router__btn">
          Lihat hasil
        </Link>
      </div>
    </div>
  );
};

export default WelcomeCard;

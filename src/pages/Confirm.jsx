import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import Container from "../components/Container";
import Content from "../components/Content";
import Navs from "../components/Navs";
import SideContent from "../components/SideContent";
import thankImg from "../images/icon-thank-you.svg";
import styles from "./confirm.module.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Confirm() {
  const { username, plan } = useSelector((store) => store.stepForm);
  const navigate = useNavigate();

  useEffect(
    function () {
      if (username === "" || plan.type === "") navigate("/");
    },
    [username, navigate, plan]
  );

  return (
    <div>
      <Container>
        <SideContent />
        <div className={styles.confirm}>
          <div>
            <img src={thankImg} alt="" />
            <h2>Thank you!</h2>
            <p>
              Thanks for confirming your subscription! We hope you have fun
              using our platform. if you ever need support, please feel free to
              email us at support@loremgaming.com
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Confirm;

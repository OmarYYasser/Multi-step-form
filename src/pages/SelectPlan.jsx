import styles from "./SelectPlan.module.css";
import Container from "../components/Container";
import Content from "../components/Content";
import Navs from "../components/Navs";
import SideContent from "../components/SideContent";
import arcade from "../images/icon-arcade.svg";
import advanced from "../images/icon-advanced.svg";
import pro from "../images/icon-pro.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { next, plan } from "../components/stepFormSlice";
import { useNavigate } from "react-router-dom";

function SelectPlan() {
  const [isYear, setIsYear] = useState(false);
  const [price, setPrice] = useState();
  const [type, setType] = useState("");
  const [required, setRequired] = useState(false);
  const sub = isYear ? "year" : "month";
  const dispatch = useDispatch();
  const username = useSelector((store) => store.stepForm.username);
  const navigate = useNavigate();

  useEffect(
    function () {
      if (username === "") navigate("/");
    },
    [username, navigate]
  );

  useEffect(
    function () {
      switch (type) {
        case "arcade":
          isYear ? setPrice(90) : setPrice(9);
          break;
        case "advanced":
          isYear ? setPrice(120) : setPrice(12);
          break;
        case "pro":
          isYear ? setPrice(150) : setPrice(15);
          break;
      }
    },
    [isYear, type]
  );
  return (
    <div>
      <Container>
        <SideContent />
        <Content>
          <h1>Select Plan</h1>
          <p>You have the option to monthly or yearly billing.</p>
          {required && (
            <p style={{ color: "red", margin: "-20px 0px 10px" }}>
              Plan Is Required
            </p>
          )}
          <div className={styles.contentGrid}>
            <div
              className={type === "arcade" ? `${styles.active}` : ""}
              onClick={() => {
                setType("arcade");
                setPrice(isYear ? 90 : 9);
              }}
            >
              <img src={arcade} alt="" />
              <div>
                <b>Arcade</b>
                <span>{isYear ? "$90/yr" : "$9/mo"}</span>
              </div>
            </div>
            <div
              className={type === "advanced" ? `${styles.active}` : ""}
              onClick={() => {
                setType("advanced");
                setPrice(isYear ? 120 : 12);
              }}
            >
              <img src={advanced} alt="" />
              <div>
                <b>Advanced</b>
                <span>{isYear ? "$120/yr" : "$12/mo"}</span>
              </div>
            </div>
            <div
              className={type === "pro" ? `${styles.active}` : ""}
              onClick={() => {
                setType("pro");
                setPrice(isYear ? 150 : 15);
              }}
            >
              <img src={pro} alt="" />
              <div>
                <b>Pro</b>
                <span>{isYear ? "$150/yr" : "$15/mo"}</span>
              </div>
            </div>
          </div>
          <div className={styles.duration}>
            Monthly
            <label htmlFor="duration">
              <input
                onChange={() => setIsYear((check) => !check)}
                type="checkbox"
                id="duration"
                checked={isYear}
              />
              <span className="slider"></span>
            </label>
            Yearly
          </div>
          <Navs
            onClick={(e) => {
              if (!type) {
                e.preventDefault();
                setRequired(true);
                return;
              }
              dispatch(plan(type, sub, price));
              dispatch(next());
            }}
            next={"/pick"}
            prev={"/personal-info"}
          />
        </Content>
      </Container>
    </div>
  );
}

export default SelectPlan;

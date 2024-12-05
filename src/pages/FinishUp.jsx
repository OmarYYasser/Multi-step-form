import { NavLink, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import Content from "../components/Content";
import SideContent from "../components/SideContent";
import Navs from "../components/Navs";
import styles from "./FinishUp.module.css";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../components/stepFormSlice";
import { useEffect } from "react";

function FinishUp() {
  const {
    plan: { sub, price, type },
    onlineService,
    largeStorage,
    customizeTheme,
  } = useSelector((store) => store.stepForm);
  console.log(sub, price, type, onlineService, largeStorage, customizeTheme);
  const dispatch = useDispatch();

  const addons = [onlineService, largeStorage, customizeTheme].filter(
    (e) => e.isActive === true
  );
  const totalAddons = addons?.reduce((curr, acc) => curr + acc.price, 0);
  console.log(totalAddons);
  const totalReset = Number(price) + totalAddons;
  console.log(totalReset);

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
        <Content>
          <h1>Finishing up</h1>
          <p>Double-Check every thing looks ok before confiming</p>
          <div className={styles.reset}>
            <div>
              <h3>
                {type} ({sub}ly)
              </h3>{" "}
              <b>
                ${price}/{sub === "year" ? "yr" : "mo"}
              </b>
            </div>
            <NavLink to="/" onClick={() => dispatch(reset())}>
              Change
            </NavLink>
            <hr />
            {addons.map((addon) => (
              <div style={{ marginBottom: "25px" }} key={addon.addonName}>
                <span>{addon.addonName}</span>
                <span>+${addon.price}/mo</span>
              </div>
            ))}
            <div className={styles.total}>
              <span>Total (Per {sub})</span>
              <span>
                +${totalReset}/{sub === "year" ? "yr" : "mo"}
              </span>
            </div>
          </div>
          <Navs next={"/confirm"} prev={"/pick"} text={{ next: "confirm" }} />
        </Content>
      </Container>
    </div>
  );
}

export default FinishUp;

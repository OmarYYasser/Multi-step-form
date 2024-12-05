import { useEffect, useState } from "react";
import Container from "../components/Container";
import Content from "../components/Content";
import Navs from "../components/Navs";
import SideContent from "../components/SideContent";
import styles from "./Pick.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addons, next } from "../components/stepFormSlice";
import { useNavigate } from "react-router-dom";

function Pick() {
  const [isOnline, setIsOnline] = useState(false);
  const [isLarge, setIsLarge] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const dispatch = useDispatch();

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
          <h1>Pick add-ons</h1>
          <p>Add-ons help enhance your gaming experience</p>
          <div className={styles.addons}>
            <label
              htmlFor="online"
              className={`${isOnline ? styles.active : ""}`}
            >
              <input
                type="checkbox"
                id="online"
                checked={isOnline}
                onChange={() => setIsOnline((e) => !e)}
              />
              <div>
                <h3>online service</h3>
                <p>access to multiplayer games</p>
              </div>
              <span>+$1/mo</span>
            </label>
            <label
              htmlFor="large"
              className={`${isLarge ? styles.active : ""}`}
            >
              <input
                type="checkbox"
                id="large"
                checked={isLarge}
                onChange={() => setIsLarge((e) => !e)}
              />
              <div>
                <h3>Larger storage</h3>
                <p>Extra 1TB of cloud save</p>
              </div>
              <span>+$1/mo</span>
            </label>
            <label
              htmlFor="profile"
              className={`${isProfile ? styles.active : ""}`}
            >
              <input
                type="checkbox"
                id="profile"
                checked={isProfile}
                onChange={() => setIsProfile((e) => !e)}
              />
              <div>
                <h3>Customizable Profile</h3>
                <p>Custom Theme on your profile</p>
              </div>
              <span>+$1/mo</span>
            </label>
          </div>
          <Navs
            onClick={() => {
              dispatch(addons(isOnline, isLarge, isProfile));
              dispatch(next());
            }}
            next={"/finish-up"}
            prev={"/select-plan"}
          />
        </Content>
      </Container>
    </div>
  );
}

export default Pick;

import { useState } from "react";
import SideContent from "../components/SideContent";
import styles from "./PersonalInfo.module.css";
import Navs from "../components/Navs";
import Container from "../components/Container";
import Content from "../components/Content";
import { useDispatch } from "react-redux";
import { formData, next } from "../components/stepFormSlice";

function PersonalInfo() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [required, setRequired] = useState("");

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;

  return (
    <>
      <Container className={styles.personal}>
        <SideContent />

        <Content className={styles.content}>
          <h1>Personal info</h1>
          <p>Please provid your name, email address, and phone number</p>
          {required === "empty" && (
            <p style={{ color: "red", margin: "-20px 0 0 0" }}>
              Form Field Is Required
            </p>
          )}
          <div className={styles.form}>
            <label htmlFor="name">Name</label>
            <input
              onFocus={() => setRequired(false)}
              type="text"
              name="username"
              id="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="e.g. Stephen King"
            />
            {required === "email" && (
              <p style={{ color: "red", margin: "10px 0 -10px 0" }}>
                Enter Valid Email Address
              </p>
            )}
            <label htmlFor="email">Email</label>
            <input
              onFocus={() => setRequired(false)}
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. StephenKing@lorem.com"
            />
            {required === "phone" && (
              <p style={{ color: "red", margin: "10px 0 -10px 0" }}>
                Enter Valid Phone Number
              </p>
            )}
            <label htmlFor="phone">Phone Number</label>
            <input
              onFocus={() => setRequired(false)}
              name="phone"
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. +1 234 567 890"
            />
          </div>
          <Navs
            next={"/select-plan"}
            onClick={(e) => {
              if (!phone || !username || !email) {
                e.preventDefault();
                setRequired("empty");
                return;
              } else if (!email.match(emailPattern)) {
                e.preventDefault();
                setRequired("email");
                return;
              }
              dispatch(formData(username, email, phone));
              dispatch(next());
            }}
          />
        </Content>
      </Container>
    </>
  );
}

export default PersonalInfo;

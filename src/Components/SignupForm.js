import React, { useState } from "react";
import "./SignupForm.css";
 
function SignupForm() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [confpwd, setConfPwd] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [pwdErr, setPwdErr] = useState("");
  const [confPwdErr, setConfPwdErr] = useState("");
 
  const handleSubmit = (event) => {
    event.preventDefault();
    if (email && pwd && confpwd) {
      if (emailErr === "" && pwdErr === "" && confPwdErr === "")
      {
        alert("Form Submitted Successfully!");
        setEmail("");
        setPwd("");
        setConfPwd("");
        setEmailErr("");
        setPwdErr("");
        setConfPwdErr("");
      } 
      else
      {
        alert("Form Submission Unsuccessful!");
      }
    }
  };
 
  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    if (!/\S+@\S+\.\S+/.test(value)) {
      setEmailErr("Please enter a valid email address");
    } else {
      setEmailErr("");
    }
  };
 
  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPwd(value);
    if (value.length < 8) {
      setPwdErr("Password must be at least 8 characters long");
    } else {
      setPwdErr("");
    }
  };
 
  const handleConfirmPasswordChange = (e) => {
    const { value } = e.target;
    setConfPwd(value);
    if (value !== pwd) {
      setConfPwdErr("Passwords do not match");
    } else {
      setConfPwdErr("");
    }
  };
 
  return (
    
    <form onSubmit={handleSubmit}>
 
      <div className="form-cont size">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} className={emailErr ? "error" : email ? "valid" : ""} />
        {emailErr && <span className="err-text">{emailErr}</span>}
      </div>

      <div className="form-cont size">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={pwd} onChange={handlePasswordChange} className={pwdErr ? "error" : pwd ? "valid" : ""} />
        {pwdErr && <span className="err-text">{pwdErr}</span>}
      </div>

      <div className="form-cont size">
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" value={confpwd} onChange={handleConfirmPasswordChange} className={confPwdErr ? "error" : confpwd ? "valid" : ""} />
        {confPwdErr && (<span className="err-text">{confPwdErr}</span>)}
      </div>

      <button type="submit">Submit</button>
      
    </form>
  );
}
 
export default SignupForm;
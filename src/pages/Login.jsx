import React from 'react'
import styles from './Login.module.css';

const Login = () => {

     const dots = Array.from({ length: 75 }).map((_, i) => {
      const left = Math.random() * 100;
      const delay = Math.random() * 8;
      const duration = 6 + Math.random() * 6;
      return (
        <div
          key={i}
          className={styles.dotWrapper}
          style={{
            left: `${left}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`
          }}
        >
          <div className={styles.dot}></div>
        </div>
      );
    });


    return (
        <div>
            <div className={styles.bg}>
                {dots}
            </div>
            <div className={styles.animatedBg}>
                <div className={styles.box}>
                    <span className={styles.borderLine}></span>
                    <form>
                        <h2>Sign in</h2>
                        <div className={styles.inputBox}>
                            <input type="text" required />
                            <span>Username</span>
                            <i></i>
                        </div>
                        <div className={styles.inputBox}>
                            <input type="password" required />
                            <span>Password</span>
                            <i></i>
                        </div>
                        <div className={styles.links}>
                            <a href="#">Forgot Password</a>
                            <a href="#">Signup</a>
                        </div>
                        <input type="submit" id="submit" value="Login" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login

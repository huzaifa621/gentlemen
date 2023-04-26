import React from "react";
import styles from "./mainSection.module.css";

export const MainSection = () => {
   return (
      <div className={styles.flexBox}>
         <textarea placeholder="Enter your message here"></textarea>
         <div className={styles.copyDiv}>
            <button>COPY</button>
            <textarea placeholder="Output message will be displayed here"></textarea>
         </div>
      </div>
   );
};

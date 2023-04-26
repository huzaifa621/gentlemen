import { useState } from "react";
import styles from "./mainSection.module.css";

export const MainSection = () => {
   const [message, setMessage] = useState("");
   return (
      <div className={styles.flexBox}>
         <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder="Enter your message here"
         ></textarea>
         <div className={styles.copyDiv}>
            <button>COPY</button>
            <textarea
               value={message}
               placeholder="Output message will be displayed here"
            ></textarea>
         </div>
      </div>
   );
};

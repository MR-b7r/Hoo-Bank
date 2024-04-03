import React from "react";
import { clients } from "../constants";
import styles from "../style";

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={` ${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div
            className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[100px] `}
            key={client.id}
          >
            <a target="_blank" href={client.link}>
              <img
                src={client.logo}
                alt="client"
                className="sm:w-[192px] w-[100px] object-contain cursor-pointer duration-200 hover:brightness-200"
              ></img>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;

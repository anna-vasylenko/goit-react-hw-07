import { LineWave } from "react-loader-spinner";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.loader}>
      <LineWave
        visible={true}
        height="100"
        width="100"
        color="#ffffff"
        ariaLabel="line-wave-loading"
      />
    </div>
  );
};

export default Loader;

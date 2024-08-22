import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/selectors.js";
import { changeFilter } from "../../redux/filtersSlice.js";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);
  console.log("Calculating task count");
  return (
    <div className={s.wrapper}>
      <label className={s.label}>
        <input
          type="text"
          name="text"
          value={filterValue}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
          className={s.input}
        />
        Find contacts by name
      </label>
    </div>
  );
};

export default SearchBox;

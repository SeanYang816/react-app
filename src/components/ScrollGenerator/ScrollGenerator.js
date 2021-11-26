import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  requestRandomUser,
  removeUser,
} from "../../reducers/randomUser";

function ScrollGenerator() {
  const dispatch = useDispatch();
  const randomUser = useSelector((state) => state.randomUser.users);
  const isLoading = useSelector((state) => state.randomUser.isLoading);
  const hasError = useSelector((state) => state.randomUser.hasError);
  const refEl = useRef(null);

  const handleOnClick = (e) => {
    dispatch(removeUser())
  }

  useEffect(() => {
    dispatch(requestRandomUser());
  }, []);

  useEffect(() => {
    if (refEl.current) {
      refEl.current.addEventListener("scroll", (e) => {
        const {
          scrollHeight,
          scrollTop,
          offsetHeight,
        } = e.target;
        if (((scrollTop + offsetHeight) >= scrollHeight && !isLoading)){
          dispatch(requestRandomUser());
        }
      });
    }
  }, []);

  return (
    <div className="App">
      <div
        ref={refEl}
        style={{ height: "100vh", width: "100vw", overflow: "auto" }}
      >
        {randomUser.map((user) => {
          const {
            name: { title, first, last },
            picture: { large },
            login: { uuid: asId },
          } = user;
          return (
            <div key={asId} id={asId} onClick={handleOnClick}>
              <img src={large} alt={`${title} ${first} ${last}`} />
            </div>
          );
        })}
        {isLoading && <p>Loading...</p>}
        {!isLoading && hasError && <p>Loading failed</p>}
      </div>
    </div>
  );
}

export default ScrollGenerator;

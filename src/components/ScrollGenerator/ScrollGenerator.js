import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  requestRandomUser,
  removeUser,
} from "../../reducers/randomUser";

function ScrollGenerator() {
  // useInjectSaga({ key: 'root', saga: rootSaga})

  const dispatch = useDispatch();
  const users = useSelector((state) => state.randomUser.users);
  const isLoading = useSelector((state) => state.randomUser.isLoading);
  const hasError = useSelector((state) => state.randomUser.hasError);
  const refEl = useRef(null);
  const [hasLoaded, sethasLoaded] = useState(false)

  const handleRemoveUser = (e) => {
    const { id } = e.currentTarget.dataset
    dispatch(removeUser(id))
  }
  useEffect(() => {
    if (!hasLoaded) {
        dispatch(requestRandomUser())
      sethasLoaded(true)
    }
  }, [hasLoaded, dispatch]);

  useEffect(() => {
    if (refEl.current) {
      refEl.current.addEventListener("scroll", (e) => {
        const {
          scrollHeight,
          scrollTop,
          offsetHeight,
        } = e.target;
        if (((scrollTop + offsetHeight) >= scrollHeight && !isLoading)) {
          dispatch(requestRandomUser());
        }
      });
    }
  }, [isLoading, dispatch]);

  return (
    <div className="App">
      <div
        ref={refEl}
        style={{ height: "100vh", width: "100vw", overflow: "auto" }}
      >
        {users.map((user, index) => {
          const {
            name: { title, first, last },
            picture: { large },
            login: { uuid: asId },
          } = user;
          return (
            <div data-id={index} key={asId} id={asId} onClick={handleRemoveUser}>
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

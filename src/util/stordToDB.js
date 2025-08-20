const getStoreReadList = () => {
  //read-list
  const storedListStr = localStorage.getItem("read-item");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoredList = (id) => {
  const storedList = getStoreReadList();
  if (storedList.includes(id)) {
    console.log(id, "Already Exist");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("read-list", storedListStr);
  }
};

export { addToStoredList };

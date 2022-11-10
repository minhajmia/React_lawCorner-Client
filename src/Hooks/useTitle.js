const { useEffect } = require("react");

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} || LawCorner`;
  }, [title]);
};
export default useTitle;

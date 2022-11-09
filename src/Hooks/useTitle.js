const { useEffect } = require("react");

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}--LabLaw`;
  }, [title]);
};
export default useTitle;

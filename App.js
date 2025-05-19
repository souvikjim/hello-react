import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {}, "heading");
const ChildComponenet = () => {
  return (
    <div>
      <h1>i am a child componenet. who is showing component composition </h1>
    </div>
  );
};
const ParentComponent = () => {
  return (
    <div>
      {ChildComponenet()}
      <ChildComponenet />
      <h1>i am parent component holding the child</h1>
    </div>
  );
};
const rootEllemet = ReactDOM.createRoot(document.getElementById("root"));

rootEllemet.render(<ParentComponent />);

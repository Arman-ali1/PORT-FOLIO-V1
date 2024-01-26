import React,{useEffect} from "react";

// Styles
import "./portfolio-item.css";

const PortfolioItem = ({ title, active, setSelected, id }) => {
  
  useEffect(()=>{
    setSelected(id)
  }
  ,[id,setSelected])
  
  return (
    <div
      className={"portfolio-item " + (active && "active")}
      onClick={() => setSelected(id)}
    >
      {title}
    </div>
  );
};

export default PortfolioItem;

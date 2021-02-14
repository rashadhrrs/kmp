import React, {FC, useState} from 'react';
import './App.css';
import { Card} from "@material-ui/core";
import randomColor from "randomcolor";


const App: FC = () => {
  let data = Array.from(Array(40).keys())
  let color = randomColor()
  const [searchCol, setSearchCol] = useState(randomColor());
  return (
    <div>
      <div className="search">
        <input
            className="search-column"
            placeholder="Find Color"
            type="text"
            onChange={(e) => {
              setSearchCol(e.target.value);
            }}
        />
      </div>
      <div className="grid-container">
        
        {data
          // .filter((data) => {
          //   if (searchCol == "") {
          //     return data;
          //   } else if (
          //     color
          //       .toLowerCase()
          //       .includes(searchCol.toLowerCase())
          //   ) {
          //     return data;
          //   }
          // })
        .map((i) => {
          let color1 = randomColor()
          return (         
            <Card
              style={{ 
              cursor: "pointer", 
              backgroundColor: color1, 
              width: "150px", 
              height:"150px"}}
            >
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default App;

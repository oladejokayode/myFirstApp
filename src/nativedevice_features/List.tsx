import React from "react";
import { Virtuoso } from "react-virtuoso";

const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);

const List: React.FC = () => {
  return (
    <div style={{ height: "400px", overflow: "auto", border: "1px solid #ccc", borderRadius: "10px", padding: "10px", background: "#222", color: "#fff" }}>
      <Virtuoso
        style={{ height: "100%" }}
        totalCount={items.length}
        itemContent={(index) => <div style={{ padding: "10px", borderBottom: "1px solid gray" }}>{items[index]}</div>}
      />
    </div>
  );
};

export default List;

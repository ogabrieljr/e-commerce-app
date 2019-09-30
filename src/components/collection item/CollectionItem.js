import React from "react";
import "./style.scss";

export default function CollectionItem({ name, price, imageUrl }) {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
}

// import React from "react";
// import "./collectionitem.scss";

// export default function CollectionItem({ id, name, price, imageUrl }) {
//   return (
//     <div className="collection-item">{console.log(name)}
//       <div
//         className="image"
//         style={{
//           backgroundImage: `url(${imageUrl})`
//         }}>
//         <div className="collection-footer">
//           <span className="name">{name}</span>
//           <span className="price">{price}</span>
//         </div>
//       </div>
//     </div>
//   );
// }

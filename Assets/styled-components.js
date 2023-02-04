// import React from 'react';

// // We declare an object called styles that will contain a few objects for card and heading styles
// // Notice that each key lists CSS styles in camel case
// const styles = {
//   card: {
//     margin: 20,
//     background: '#e8eaf6',
//   },
//   heading: {
//     background: '#9a74db',
//     minHeight: 50,
//     lineHeight: 3.5,
//     fontSize: '1.2rem',
//     color: 'white',
//     padding: '0 20px',
//   },
// };



// // In Navbar, we can assign a style from an object by using curly braces
// function Navbar() {
//   return (
//     <div style={styles.card}>
//       <div style={styles.heading}>Home</div>
//     </div>
//   );
// }

// export default Navbar;

import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  margin: 20px;
  background: #e8eaf6;
`;

const Heading = styled.div`
  background: #9a74db;
  min-height: 50px;
  line-height: 3.5rem;
  font-size: 1.2rem;
  color: white;
  padding: 0 20px;
`;



// Make sure you install npm package to work
// npm install --save styled-components

// In Navbar, we can assign a style from an object by using curly braces
function Navbar() {
  return (
    <Card>
      <Heading>Home</Heading>
    </Card>
  );
}

export default Navbar;
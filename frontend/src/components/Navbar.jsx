import React from "react";
import Nav from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function Navbar({ updateFormButton, currentUser, submitLogout }) {
    return (
        <Nav bg="dark" variant="dark">
            <Container>
                <Nav.Brand>Authentication App</Nav.Brand>
                <Nav.Toggle />
                <Nav.Collapse className="justify-content-end">
                    <Nav.Text>
                        {currentUser ? (
                            <form onSubmit={submitLogout}>
                                <Button type="submit" variant="light">
                                    Log out
                                </Button>
                            </form>
                        ) : (
                            <Button onClick={updateFormButton} variant="light">
                                Register
                            </Button>
                        )}
                    </Nav.Text>
                </Nav.Collapse>
            </Container>
        </Nav>
    );
}

export default Navbar;

// import React from 'react';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';

// function NavigationBar({ updateFormButton, currentUser, submitLogout }) {
//   return (
//     <Navbar bg="dark" variant="dark">
//       <Container>
//         <Navbar.Brand>Authentication App</Navbar.Brand>
//         <Navbar.Toggle />
//         <Navbar.Collapse className="justify-content-end">
//           <Navbar.Text>
//             {currentUser ? (
//               <form onSubmit={submitLogout}>
//                 <Button type="submit" variant="light">
//                   Log out
//                 </Button>
//               </form>
//             ) : (
//               <Button onClick={updateFormButton} variant="light">
//                 Register
//               </Button>
//             )}
//           </Navbar.Text>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavigationBar;

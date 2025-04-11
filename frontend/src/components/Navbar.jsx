
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     const user = JSON.parse(localStorage.getItem('user'));

//     return (
//         <nav>
//             <Link to="/">Home</Link>
//             <Link to="/shop">Shop</Link>
//             <Link to="/petshop">PetShop</Link>

//             {user ? (
//                 <>

//                     {user.role === 'admin' && <Link to="/admin">Admin Dashboard</Link>}
//                     {user.role === 'user' && <Link to="/profile">Profile</Link>}

//                 </>
//             ) : (
//                 <>
//                     <Link to="/login">Login</Link>
//                     {/* <Link to="/register">Register</Link> */}
//                 </>
//             )}
//         </nav>
//     );
// };

// export default Navbar;
// import { Link, useNavigate } from 'react-router-dom';

// const Navbar = () => {
//     const user = JSON.parse(localStorage.getItem('user'));
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         localStorage.removeItem('user');
//         navigate('/login');
//     };

//     return (
//         <nav>
//             <Link to="/">Home</Link>
//             <Link to="/shop">Shop</Link>
//             <Link to="/petshop">PetShop</Link>
//             <Link to="/pets">Pets</Link>

//             {user ? (
//                 <>
//                     {user.role === 'admin' && (
//                         <>
//                             <Link to="/admin">Admin Dashboard</Link>
//                             <Link to="/create-pet">Create Pet</Link>
//                         </>
//                     )}
//                     {user.role === 'user' && (
//                         <>
//                             <Link to="/profile">Profile</Link>
//                             <Link to="/cart">Cart</Link>
//                         </>
//                     )}
//                     <button onClick={handleLogout}>Logout</button>
//                 </>
//             ) : (
//                 <>
//                     <Link to="/login">Login</Link>
//                     <Link to="/register">Register</Link>
//                 </>
//             )}
//         </nav>
//     );
// };

// export default Navbar;

// frontend/src/components/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
            <div className="container">
                <Link className="navbar-brand" to="/">Billu Doggo Care</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/shop">Shop</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/petshop">PetShop</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pets">Pets</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {user ? (
                            <>
                                {user.role === 'admin' && (
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/admin">Admin Dashboard</Link>

                                        </li>

                                    </>
                                )}
                                {user.role === 'user' && (
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/profile">Profile</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/cart">Cart</Link>

                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/create-pet">Create Pet</Link>
                                        </li>
                                    </>
                                )}
                                <li className="nav-item">
                                    <button className="btn btn-link nav-link" onClick={handleLogout}>Logout</button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

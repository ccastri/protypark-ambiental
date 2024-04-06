// // components/ProtectedRoute.js

// import { useRouter } from 'next/router';
// import { useSelector } from 'react-redux';
// import { selectUser } from '../store/userSlice';

// const ProtectedRoute = ({ allowedRoles, children }) => {
//   const router = useRouter();
//   const user = useSelector(selectUser);

//   if (!user) {
//     // Redirect to login if user is not authenticated
//     if (typeof window !== 'undefined') {
//       router.push('/login');
//     }
//     return null;
//   }

//   if (!allowedRoles.includes(user.role)) {
//     // Redirect to unauthorized page if user role doesn't match
//     if (typeof window !== 'undefined') {
//       router.push('/unauthorized');
//     }
//     return null;
//   }

//   // Render the protected component if everything is okay
//   return <>{children}</>;
// };

// export default ProtectedRoute;

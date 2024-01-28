// 'use client'

// import DocumentosAfiliados from './_components/Test3';
// import TuComponentePrincipal from './_components/Test3';
// import LandingPage from './_components/LandingPage'
// // import DocumentosAfiliados from './_components/SelectDocuments';
// import { Provider } from 'react-redux';
// import { store } from '../../redux/store'; // Importa tu store aquí
// import { useEffect, useState } from 'react'
// import axios from 'axios';
// import ProtectedRoute from './ProtectedRoute';

// const Page = () => {

// const getUser= axios.get('localhost/')
// const getRole=(user.role)=>{}
// const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost/', {
//           headers: {
//             Authorization: `Bearer ${YOUR_ACCESS_TOKEN}`, // Replace with your actual access token
//           },
//         });
//         setUser(response.data);
//       } catch (error) {
//         // Handle error, e.g., user not authenticated
//         console.error('Error fetching user data:', error);
//       }
//     };

//     fetchData();
//   }, []);


//   return (
//     <main>
//       {/* <Home /> */}
//       <Provider store={store}>
//         {/* Rutas protegidas*/}
        
//         {user && (
//           // Check user role and render components accordingly
//           user.role === 'ADMIN' ? <TuComponentePrincipal /> : <LandingPage />
//         )}
//       </Provider>
//     </main>
//   );
// };

// export default Page;


'use client'

import DocumentosAfiliados from './_components/Test3';
import TuComponentePrincipal from './_components/Test3';
// import DocumentosAfiliados from './_components/SelectDocuments';
import { Provider } from 'react-redux';
import { store } from '../../redux/store'; // Importa tu store aquí
import { useEffect } from 'react'

const Page = () => {




  return (
    <main>
      {/* <Home /> */}
      
      <Provider store={store}>
        {/* Rutas protegidas*/}
        <TuComponentePrincipal />
      </Provider>
    </main>
  );
};

export default Page;

import Footer from '../components/Footer.tsx';
import Header from '../components/Header.tsx';

const Profile = () => {
  return (
    <div className="min-h-screen font-semibold dark:bg-gray-blue-800 dark:text-slate-100">
      <Header />
      <main className="p-4  h-[450px]">User profile page...</main>
      <Footer />
    </div>
  );
};
export default Profile;

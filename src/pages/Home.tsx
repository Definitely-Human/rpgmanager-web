import {
  RiBarChartGroupedLine,
  RiCalendarTodoFill,
  RiFileList3Line,
} from 'react-icons/ri';
import { RxBell } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import Hero1Icon from '../assets/icons/Hero1Icon.png';
import Hero2Icon from '../assets/icons/swordsman.png';
import Footer from '../components/Footer.tsx';
import Header from '../components/Header.tsx';

const Home = () => {
  return (
    <div className="min-h-screen font-semibold dark:bg-gray-blue-800 dark:text-slate-100">
      <Header />
      <main className="max-w-screen-xl mx-auto ">
        <div className="flex items-end pl-10 bg-gray-blue-900">
          <div className="py-12 text-2xl text-justify">
            <h2 className="text-5xl">
              RPG Manager - the new way of self-management!
            </h2>
            <p className="mt-6 indent-8">
              <span className="text-3xl text-primary-400">
                Welcome to RPG Manager, your ultimate self-management app&nbsp;
              </span>
              <span className="font-normal ">
                that seamlessly blends the excitement of gaming with the power
                of organization tools. With RPG Manager, you can create and
                customize your own&nbsp;
                <span className="font-semibold text-secondary-400">
                  character
                </span>
                , train unique{' '}
                <span className="font-semibold text-secondary-400">skills</span>
                , acquire{' '}
                <span className="font-semibold text-secondary-400">
                  characteristics
                </span>
                , and gain{' '}
                <span className="font-semibold text-secondary-400">items</span>{' '}
                to represent your real-life goals and aspirations.
              </span>
            </p>
            <p className="mt-6 font-normal indent-8">
              Level up your character by completing tasks and achieving
              milestones in your personal and professional life. Gain experience
              points as you conquer challenges and reach new heights!
            </p>
            <div className="mt-10 text-center">
              <Link
                to="/auth/register"
                className="px-10 py-2 border-4 rounded-md border-secondary hover:bg-gray-blue-800"
              >
                Join Now!
              </Link>
            </div>
          </div>
          <img src={Hero1Icon} className="w-5/12" alt="hero icon" />
        </div>
        <div className="px-10 py-16 bg-gray-blue-700">
          <h2 className="text-5xl text-center indent-0">
            Use our powerful tools:
          </h2>
          <div className="grid grid-cols-2 grid-rows-2 gap-10 mt-8 text-xl text-justify">
            <div className="flex flex-col">
              <span className="mx-auto mb-2 text-8xl text-primary-400 ">
                <RiFileList3Line />
              </span>
              <p>
                Stay organized like never before by utilizing our tasks, lists,
                routines and notes which allow you to categorize and prioritize
                your to-dos, ensuring that you&apos;re always on top of your
                game.
              </p>
            </div>
            <div className="flex flex-col">
              <span className="mx-auto mb-2 text-8xl text-primary-400 ">
                <RiCalendarTodoFill />
              </span>
              <p>
                Our integrated calendar feature helps you schedule important
                events, appointments, and deadlines, providing you with a clear
                overview of your upcoming tasks and adventures.
              </p>
            </div>
            <div className="flex flex-col">
              <span className="mx-auto mb-2 text-8xl text-primary-400">
                <RiBarChartGroupedLine />
              </span>
              <p>
                Dive into the statistics section to track your progress over
                time, visualize your achievements, and identify areas where you
                can improve your real-life skills.
              </p>
            </div>
            <div className="flex flex-col">
              <span className="mx-auto mb-2 text-8xl text-primary-400">
                <RxBell />
              </span>
              <p>
                Set reminders to keep you on track, receive notifications for
                important tasks, and stay motivated on your journey to success.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-end px-10 pb-8 bg-gray-blue-900">
          <img src={Hero2Icon} className="w-4/12" alt="hero icon" />
          <div className="py-12 pl-10 text-2xl text-justify">
            <h2 className="text-5xl indent-0">Play while staying organized!</h2>
            <div className="font-normal">
              <p className="mt-6 indent-8">
                Customize your character&apos;s appearance and watch them evolve
                as you conquer new challenges and level up, providing a fun and
                motivating visual representation of your accomplishments.
              </p>
              <p className="mt-6 indent-8">
                Share your achievements and progress with friends and fellow RPG
                Manager users, or challenge them to achieve their goals as well,
                fostering a supportive and competitive community.
              </p>
              <p className="mt-6 indent-8">
                Whether you&apos;re striving to boost your productivity, reach
                personal milestones, or level up your life, RPG Manager is your
                ultimate companion, combining the thrill of RPG gaming with
                effective self-management tools for a more organized and
                fulfilling life.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Home;

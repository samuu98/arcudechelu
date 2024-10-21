import logo from '/logo.png';
import main from '/main2.jpg';

const MainSection = () => {
  return (
    <div className="flex h-auto flex-col items-center relative z-10">
      <div className="flex h-auto flex-col items-center relative z-10" >
        <img src={logo} alt="logo" className="mt-8 h-auto w-[30vw] max-w-[600px]"/>
        <h1 className="mt-2 text-teal-600" style={{ fontFamily: "'Forum'", fontSize: '5rem' }}>Arcu de Chelu</h1>
        <h3 className="text-teal-500" style={{ fontFamily: "'Great Vibes'", fontSize: '3rem' }}>-- Bed & Breakfast --</h3>
      </div>
      <div className="absolute inset-0 z-0">
        <img src={main} alt="logo" className="h-[100vh] w-full object-cover"/>
      </div>
    </div>
  );
};

export default MainSection;


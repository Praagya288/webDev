import firebaseImg from "../assets/images/firebase.png";


const NavBar = () => {
  return (
    <div className=" flex  items-center h-[60px] bg-white my-4 rounded-lg  justify-center gap-2 text-xl font-medium">
      <img src={firebaseImg} className="h-10 w-10" alt="" />

      <h1 className="bg-white">firebase contact app</h1>
    </div>
  );
};

export default NavBar;

import { IoCloseCircleOutline } from "react-icons/io5";

const Modal = ({
  title,
  desc,
  setIsModalOpen,
  isModalOpen = false,
  content,
}) => {
  return (
    <div
      className={`${isModalOpen ? "block" : "hidden"} w-full h-screen sticky top-0 right-0 left-0 bottom-0 bg-gray-500/40 flex justify-center items-center `}
    >
      <div className="bg-white py-15  px-10 w-3/4 lg:w-1/2 xl:w-[40%] rounded shadow-2xl">
        <div>
          <div className="text-xl flex items-center justify-between">
            <h5 className="font-semibold">{title}</h5>
            <span
              onClick={() => setIsModalOpen(false)}
              className="hover:text-red-500 text-2xl cursor-pointer"
            >
              <IoCloseCircleOutline />
            </span>
          </div>
          <p className="mt-1 text-sm italic">{desc}</p>
        </div>
        {content}
      </div>
    </div>
  );
};

export default Modal;

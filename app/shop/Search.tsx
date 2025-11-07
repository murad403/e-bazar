"use client";
import { useForm } from "react-hook-form";
import { FiSearch } from "react-icons/fi";

type TInputs = {
  search: string;
};

const Search = () => {
  const { register, handleSubmit } = useForm<TInputs>();

  const onSubmit = (data: TInputs) => {
    console.log("Search Query:", data.search);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-center w-full max-w-md mx-auto"
    >
      <input
        {...register("search", { required: true })}
        type="text"
        placeholder="Search Products..."
        className="
          flex-1 px-4 py-2 border border-gray-300 rounded-l-lg 
          focus:outline-none focus:ring-2 focus:ring-purple-400
        "
      />
      <button
        type="submit"
        className="
          bg-basic text-white px-5 py-[11px] rounded-r-lg 
          flex items-center justify-center cursor-pointer
        "
      >
        <FiSearch size={20} />
      </button>
    </form>
  );
};

export default Search;

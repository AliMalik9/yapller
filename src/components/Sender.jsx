function Sender() {
  return (
    <div className="flex px-5 py-5 justify-center items-center gap-2 rounded-3xl bg-[#151516]/60">
      <img
        className="w-10 h-10 flex-shrink-0 rounded-lg  object-cover bg-gray-300"
        src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1"
        alt="Dominant"
      />
      <div>
        <p className="text-[#F5F5F6] text-base font-semibold leading-5 overflow-hidden text-ellipsis line-clamp-1">Name</p>
        <p className="text-[#ADAEB3] text-sm font-normal leading-5 overflow-hidden text-ellipsis line-clamp-1">@username</p>
      </div>
    </div>
  );
}

export default Sender;
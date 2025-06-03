import Userchat from "./Userchat";

function Sidebar() {
  return (
    <div className="w-96 h-full bg-[#151516]/60 rounded-3xl p-4 text-white flex flex-col gap-4">
      <input
        className="rounded-2xl border border-white/0 bg-[#f5f5f6]/10 flex px-4 py-3 items-center w-full"
        type="text"
        name="search"
        id="search"
        placeholder="Search Username"
      />

      <div className="rounded-2xl flex flex-col items-center gap-2 self-stretch overflow-auto">
          <Userchat/>
      </div>
    </div>
  );
}

export default Sidebar;

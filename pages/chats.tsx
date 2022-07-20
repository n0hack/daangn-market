import React from "react";

type Props = {};

export default function Chats({}: Props) {
  return (
    <div className="py-10 divide-y-[1px] ">
      {[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
        <div
          key={i}
          className="flex px-4 cursor-pointer py-3 items-center space-x-3"
        >
          <div className="w-12 h-12 rounded-full bg-slate-300" />
          <div>
            <p className="text-gray-700">Steve Jebs</p>
            <p className="text-sm  text-gray-500">내일 2시에 봬요!</p>
          </div>
        </div>
      ))}
    </div>
  );
}

import type { NextPage } from "next";

type Props = {};

const Create: NextPage = ({}: Props) => {
  return (
    <div className="px-4 py-10 space-y-5">
      <div>
        <label
          htmlFor="name"
          className="text-sm font-medium text-gray-700 mb-1 block"
        >
          이름
        </label>
        <div className="rounded-md shadow-sm flex items-center">
          <input
            id="name"
            type="text"
            className="appearance-none w-full px-3 pr-7 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="price"
          className="text-sm font-medium text-gray-700 mb-1 block"
        >
          가격
        </label>
        <div className="relative rounded-md shadow-sm flex items-center">
          <input
            id="price"
            type="text"
            placeholder="0"
            className="appearance-none w-full px-3 pr-7 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
          <div className="absolute right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-gray-500">원</span>
          </div>
        </div>
      </div>
      <div>
        <label
          htmlFor="description"
          className="text-sm font-medium text-gray-700 mb-1 block"
        >
          설명
        </label>
        <textarea
          id="description"
          rows={4}
          className="mt-1 shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500"
        />
      </div>
      <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-2 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
        스트리밍 시작하기
      </button>
    </div>
  );
};

export default Create;

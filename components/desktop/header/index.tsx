import React from "react";
import useTabStore from "@/store/usePeopleStore";
import classNames from "classnames";

interface Props {
  scrollTop: number | undefined;
}

const Header = (props: Props) => {
  const { scrollTop } = props;
  const { tabs } = useTabStore();
  console.log(scrollTop, "scrollTop");

  return (
    //  scrollTop! > 48 ? "bg-[#fef7ec]" : " bg-red"
    <div
      className={classNames(
        " h-[64px] flex items-center px-[20px]",
        scrollTop! > 48 ? "bg-[#fffefb]" : " bg-[#fef7ec]"
      )}
    >
      <div
        className={classNames(
          " flex-1 font-sile text-3xl sm:text-4xl bg-gradient-to-r from-yellow-600 ",
          "to-orange-600 dark:from-yellow-400 dark:to-orange-400 bg-clip-text text-transparent animate-pulse"
        )}
      >
        gudetama
      </div>
      <div className=" flex">
        {tabs.map((item, idx) => {
          return (
            <div key={idx} className=" ml-[20px]">
              <a href={item.href}>{item.lable}</a>
            </div>
          );
        })}
      </div>
      <div className=" ml-[30px] border rounded-[5px]">icon</div>
    </div>
  );
};
export default Header;

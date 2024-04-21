import Image from 'next/image';

const HEADER_BG_WIDTH = 325;
const HEADER_BG_HEIGHT = 172;

const Logo = () => {
  return (
    <Image
      src="https://webstatic.mihoyo.com/upload/event/2022/07/29/c31dd1d732913e4ab5f3d4f03346a706_9097205533659112586.png"
      alt="logo"
      width={HEADER_BG_WIDTH}
      height={HEADER_BG_HEIGHT}
      className="absolute left-[4%] top-[0.5vh] h-[12vh] w-[13%] select-none min-h-[114px] min-w-[215px]"
    />
  );
};
export default Logo;

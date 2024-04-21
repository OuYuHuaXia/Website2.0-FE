'use client';

const Home = () => {
  return (
    <>
      <video
        width="320"
        height="240"
        autoPlay
        loop
        controls={false}
        src="https://fastcdn.mihoyo.com/content-v2/hkrpg/101956/3ff792bf2bc4b5092e714f08b5d728a3_4296252783649092438.mp4"
        className="absolute left-0 top-0 w-full select-none"
      ></video>
    </>
  );
};

export default Home;

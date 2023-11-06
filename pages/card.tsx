import SocialLinks from '../components/SocialLinks';
import Link from 'next/link';
import Head from 'next/head';

export default () => {
  return <div
    className="w-full pb-32 pt-16 bg-zinc-50 h-screen
    flex flex-col justify-center">
    <Head>
      <title>許正坤 Ken Hsu 的電子名片</title>
      <meta
        name="og:description"
        content="本頁是 Ken Hsu 許正坤的電子名片，有自我介紹、與聯繫方式。"
      />
      <meta
        name="og:image"
        content="/card-og.png"
      />
      <meta name="twitter:card" content="summary_large_image"/>
    </Head>
    <div className="w-full lg:w-[650px] px-16 lg:px-4 mx-auto pb-24">
      <div className="flex items-center mt-12 flex-col justify-center">
        <img
          src="https://avatars.githubusercontent.com/u/119805086?v=4"
          alt="author-avatar"
          className="w-24 h-24 rounded-full"
        />
        <div className="ml-0 mt-12">
          <p className="font-extrabold opacity-60 mb-4 text-center">
            關於我
          </p>
          <p className="font-extrabold text-2xl text-center">
            Ken Hsu 許正坤
          </p>
          <p className="mt-6 mb-12 opacity-70 text-center">
            台灣台北人，目前擔任全端開發工程師。
          </p>
          <div className="flex justify-center">
            <SocialLinks/>
          </div>

        </div>

        <div className="absolute bottom-12 left-0 w-full">
          <Link href="/">
            <p className="text-center text-blue-500 cursor-pointer">
              回部落格首頁
            </p>
          </Link>
        </div>
      </div>
    </div>
  </div>;
};

import Head from 'next/head';

interface Props {
  title?: string;
  description?: string;
  imageUrl?: string;
  canonicalUrl?: string;
  type?: string;
  keywords?: string[];
}

function PageHead(props: Props) {
  return <Head>
    <title>
      {props?.title || 'Blog | Ken Hsu 許正坤'}
    </title>
    <meta
      property="og:title"
      content={props?.title || 'Blog | Ken Hsu 許正坤'}
      key="title" />
    <meta name="robots" content="index,follow" />
    {props.canonicalUrl && <link rel="canonical" href={props.canonicalUrl} />}
    <meta
      name="description"
      content={props?.description || '我是許正坤' +
        '歡迎查看我的部落格！'
      } />
    <meta
      name="keywords"
      content={props.keywords?.join(', ') ||
          'React, Javascript, Typescript, 網站開發, 軟體開發, 前端, 後端, Go, Golang,' +
          ' Blog, 部落格, Ken,Ken Hsu,Hsu,許正坤, html, css'} />
    <meta name="author" content="Ken Hsu 許正坤" />
    <meta property="og:type" content={props.type || 'website'} key="type" />
    <meta
      property="og:description"
      content={props?.description || '我是許正坤，。' +
        '歡迎查看我的部落格！'
      }
      key="description" />
    {/*<meta*/}
    {/*  property="og:image"*/}
    {/*  content={props?.imageUrl || 'https://i.imgur.com/iZI6XtN.jpg'}*/}
    {/*  key="image" />*/}
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="icon" href="/favicon.png" />
    <meta name="theme-color" content="#f2e9e4" />
  </Head>;
}

export default PageHead;

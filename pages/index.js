import Layout from "./component/Layout";
import Main from "./component/Main";
import HeadMeta from "./HeadMeta";

const Home = () => {
  return (
    <Layout>
        <HeadMeta title="메인" />
        <Main/>
    </Layout>
    )
}

export default Home;
